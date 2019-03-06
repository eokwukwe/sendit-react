import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import BaseRoute from "./pages/route/BaseRoute";

const App = () => (
  <Router>
    <BaseRoute />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
