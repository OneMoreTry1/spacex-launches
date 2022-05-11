import React from "react";
import logo from "../spacexLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <a
        href="https://www.spacex.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="header__link"
      >
        <img src={logo} alt="SpaceX logo" className="header__logo" />
      </a>
    </header>
  );
};

export default Header;
