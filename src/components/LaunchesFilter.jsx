import React, { useState } from "react";

const LaunchesFilter = ({ handleFilter }) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="launches__filter">
      <div className="launches__filter-field">
        <label
          htmlFor="launches__filter-input"
          className="launches__filter-label label"
        >
          Filter by mission name:
        </label>
        <input
          type="text"
          className="launches__filter-input input"
          id="launches__filter-input"
          placeholder="Thaicom 6..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="launches__filter-actions">
        <button
          className="launches__filter-btn btn"
          onClick={() => handleFilter(filter)}
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default LaunchesFilter;
