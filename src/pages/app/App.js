import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import routes from "../routes/routes"
import HomePage from "../Homepage/HomePage"
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
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {routes.map(route => (
              <Route
                path={route.path}
                key={route.name}
                render={props => <route.component {...props} />}
              />
            ))}
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App
