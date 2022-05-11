import React, { useState } from "react";
import LaunchesFilter from "./LaunchesFilter";
import LaunchesInner from "./LaunchesInner";

const Launches = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <section className="launches">
      <div className="container">
        <h2 className="launches__heading">All SpaceX launches</h2>
        <LaunchesFilter handleFilter={handleFilter} />
        <div className="launches__inner">
          <LaunchesInner filter={filter} />
        </div>
      </div>
    </section>
  );
};

export default Launches;
