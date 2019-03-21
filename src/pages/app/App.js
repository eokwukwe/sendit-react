import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode"
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"

import routes from "../routes/routes"
import store from "../../store/configureStore"
import HomePage from "../Homepage/HomePage"
import setAuthToken from "../../utils/setAuthToken"
import { setCurrentUser } from "../../actions/auth/authActions"

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthentication
  store.dispatch(setCurrentUser(decoded))
}

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
      <Provider store={store}>
        <div>
          <ReduxToastr
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
          <Router>
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
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
