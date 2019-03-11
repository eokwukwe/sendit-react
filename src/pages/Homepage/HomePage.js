import React from "react";
import "./HomePage.scss";

/**
 * @description Renders the Homepage
 * @return {JSX} - returns the page JSX
 */
const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to SendIT</h1>
    <p>The easiest and fastest means to deliver your parcel.</p>
    <p>
      Simply{" "}
      <a className="signup-index" href="signup.html">
        Sign Up
      </a>{" "}
      and start sending.
    </p>
  </div>
);

export default HomePage;
