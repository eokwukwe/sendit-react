import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./HomePage.scss"

/**
 * @description Renders the Homepage
 * @return {JSX} - returns the page JSX
 */
export class HomePage extends Component {
  /**
   * @description Prevent logged in user from going to the home page
   * @returns {void}
   */
  componentDidMount() {
    if (this.props.auth.isAuthenticated === true) {
      this.props.auth.user.usertype === "user"
        ? this.props.history.push("/user")
        : this.props.history.push("/admin")
    }
  }

  /**
   * @returns {JSX} - Home page
   */
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar__home">
          <div className="container">
            <Link className="brand" to="/">
              SendIT
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="btn btn-nav__home" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="home-page">
          <h1>Welcome to SendIT</h1>
          <p>The easiest and fastest means to deliver your parcel.</p>
          <p>
            Simply{" "}
            <Link className="signup-index" to="/signup">
              Sign Up
            </Link>{" "}
            and start sending.
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(HomePage)
