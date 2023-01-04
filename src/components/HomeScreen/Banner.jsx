import React from "react";
import "./Banner.css";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h4 className="banner__description">This is a test description</h4>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
