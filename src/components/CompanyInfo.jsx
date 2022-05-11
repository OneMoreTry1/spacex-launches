import React from "react";
import elonOnRocket from "../spacex-elon.jpg";

const CompanyInfo = () => {
  return (
    <section className="company-info">
      <div className="container">
        <h1 className="company-info__heading-text">
          Project made by using React, Apollo, GraphQL
        </h1>
        <div className="company-info__inner">
          <p className="company-info__main-text">
            <strong>SpaceX</strong> designs, manufactures and launches advanced
            rockets and spacecraft. The company was founded in 2002 to
            revolutionize space technology, with the ultimate goal of enabling
            people to live on other planets.
          </p>
          <div className="company-info__img-wrapper">
            <img
              className="company-info__img"
              src={elonOnRocket}
              alt="Spacex with Elon Musk"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
