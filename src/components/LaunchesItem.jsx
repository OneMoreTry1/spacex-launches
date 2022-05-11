import React from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const LaunchesItem = ({
  id,
  mission_name,
  launch_success,
  mission_patch_small,
  launch_date_utc,
  site_name_long,
}) => {
  const success = launch_success ? "success" : "fail";
  return (
    <article className="launches__item">
      <div className="launches__item-image-wrapper">
        {mission_patch_small ? (
          <img
            className="launches__item-image"
            src={mission_patch_small}
            alt="Mission logo"
          />
        ) : (
          "no image"
        )}
      </div>
      <div className="launches__item-content">
        <div className="launches__item-text">
          <h2 className="launches__item-mission-name">
            <b>Mission name :</b> <i>{mission_name}</i>
          </h2>
          <p className="launches__item-launch-site">
            <b>Launch site name :</b> <i>{site_name_long}</i>
          </p>
          <p className="launches__item-launch-date">
            <b>Launch date :</b> <time>{launch_date_utc}</time>
          </p>
          <p className={`launches__item-success ${success}`}>
            {capitalizeFirstLetter(success)}
          </p>
        </div>

        <Link className="launches__item-details" to={`/${id}`}>
          Details &gt;
        </Link>
      </div>
    </article>
  );
};

export default LaunchesItem;
