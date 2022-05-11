import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const GET_LAUNCH_BY_ID = gql`
  query Launch($findId: ID!) {
    launch(id: $findId) {
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_success
      links {
        flickr_images
        mission_patch_small
        video_link
        wikipedia
        article_link
        presskit
      }
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

const LaunchPage = () => {
  const { launchId } = useParams();

  const { data, loading, error } = useQuery(GET_LAUNCH_BY_ID, {
    variables: {
      findId: launchId,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  const {
    details,
    launch_date_utc,
    launch_site: { site_name_long },
    launch_success,
    links: {
      flickr_images,
      mission_patch_small,
      video_link,
      wikipedia,
      article_link,
      presskit,
    },
    mission_name,
    rocket: { rocket_name, rocket_type },
  } = data.launch;

  const success = launch_success ? (
    <span className="success">Success</span>
  ) : (
    <span className="fail">Fail</span>
  );

  return (
    <main className="main">
      <section className="launch-detail">
        <div className="container">
          <div className="launch-detail__inner">
            <div className="launch-detail__img-wrapper">
              <img
                src={mission_patch_small}
                alt="Mission patch logo"
                className="launch-detail__img"
              />
            </div>
            <div className="launch-detail__content">
              <h1 className="launch-detail__mission-name">
                {mission_name} {success}
              </h1>
              <h2 className="launch-detail__rocket">
                <b>Rocket:</b>{" "}
                <i>
                  {rocket_name} {rocket_type}
                </i>
              </h2>
              <h3 className="launch-detail__site-name">
                <b>Site name:</b> <i>{site_name_long}</i>
              </h3>
              <p className="launch-detail__details">{details}</p>
              <p className="launch-detail__date">
                <b>Launch date:</b> <time>{launch_date_utc}</time>
              </p>
              <ul className="launch-detail__link-list">
                <li className="launch-detail__link-item">
                  <a
                    href={wikipedia}
                    className="launch-detail__link wikipedia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                </li>
                <li className="launch-detail__link-item">
                  <a
                    href={article_link}
                    className="launch-detail__link article"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Artcile
                  </a>
                </li>
                <li className="launch-detail__link-item">
                  <a
                    href={presskit}
                    className="launch-detail__link presskit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Presskit
                  </a>
                </li>
              </ul>
            </div>
            <div className="launch-detail__gallery">
              <ul className="launch-detail__gallery-list">
                {flickr_images.map((img) => (
                  <li key={img} className="launch-detail__gallery-item">
                    <img
                      src={img}
                      alt="Launch images"
                      className="launch-detail__gallery-img"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="launch-detail__video youtube">
              <iframe
                src={video_link.replace("watch?v=", "embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Link to="/" className="btn__back btn">
        Back
      </Link>
    </main>
  );
};

export default LaunchPage;
