import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import LaunchesItem from "./LaunchesItem";

const GET_LAUNCHES = gql`
  query Launches($launchLimit: Int, $findMissionName: String) {
    launches(limit: $launchLimit, find: { mission_name: $findMissionName }) {
      id
      links {
        mission_patch_small
      }
      mission_name
      launch_site {
        site_name_long
      }
      launch_date_utc
      launch_success
    }
  }
`;

const LaunchesInner = ({ filter }) => {
  const [limit, setLimit] = useState(10);
  const [lengthData, setLengthData] = useState(10);

  const { data, loading, error } = useQuery(GET_LAUNCHES, {
    variables: {
      launchLimit: limit,
      findMissionName: filter,
    },
  });

  const handleMoreClick = () => {
    setLimit((prev) => prev + 10);

    setLengthData(data.launches.length);
  };

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  if (!data.launches.length) return <p>No information...</p>;

  const isShow = data.launches.length > lengthData;

  return (
    <>
      {data.launches.map(
        ({
          id,
          links: { mission_patch_small },
          mission_name,
          launch_site: { site_name_long },
          launch_date_utc,
          launch_success,
        }) => (
          <LaunchesItem
            key={id + Math.random()}
            id={id}
            mission_name={mission_name}
            launch_success={launch_success}
            mission_patch_small={mission_patch_small}
            launch_date_utc={launch_date_utc}
            site_name_long={site_name_long}
          />
        )
      )}
      {isShow && (
        <div className="launches__action">
          <button className="launches__load-more btn" onClick={handleMoreClick}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default LaunchesInner;
