import React, { Component, Fragment } from "react";
import HomePage from "../Homepage/HomePage";

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @description
   * @return {JSX} - returns the page JSX
   */
  render() {
    return (
      <Fragment>
        <HomePage />
      </Fragment>
    );
  }
}

export default App;
