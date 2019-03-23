import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode"
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"

import routes from "../routes/routes"
import store from "../../store/configureStore"
import setAuthToken from "../../utils/setAuthToken"
import { setCurrentUser } from "../../actions/authActions"
import ProtectedRoute from "../../components/common/ProtectedRoute/ProtectedRoute"

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
              {routes.public.map(route => (
                <Route
                  key={route.name}
                  exact={route.exact}
                  path={route.path}
                  render={props => <route.component {...props} />}
                />
              ))}
              {routes.protected.map(route => (
                <ProtectedRoute
                  key={route.name}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
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
