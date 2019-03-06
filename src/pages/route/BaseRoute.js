import React from "react";
import { Route } from "react-router-dom";
import App from "../app/App";

const BaseRoute = () => <Route exact path="/" component={App} />;

export default BaseRoute;
