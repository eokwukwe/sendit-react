import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "./App.scss";

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
      <div className="App">
        <h1>Hello, World! This is sendIT.</h1>
        <Button secondary>
          Button
        </Button>
      </div>
    );
  }
}

export default App;
