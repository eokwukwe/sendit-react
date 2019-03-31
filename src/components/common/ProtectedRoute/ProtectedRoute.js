import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // Check if user is authenicated and then load in the component
      (auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        // Redirect user to login page is not authenticated
        <Redirect to="/login" />
      ))
    }
  />
)

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ProtectedRoute)
