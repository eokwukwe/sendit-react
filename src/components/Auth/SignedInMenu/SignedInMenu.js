import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"
import { NavDropdown } from "react-bootstrap"
import { connect } from "react-redux"
import { logoutUser } from "../../../actions/authActions"
import "./SignedInMenu.scss"
import user from "../../../../public/assets/images/user.png"

/**
 * @description Renders the Homepage
 * @return {JSX} - returns the page JSX
 */
export class SignedInMenu extends Component {
  handleLogout = () => {
    this.props.logoutUser()
  };

  /**
   * @returns {JSX} - SignedInMenu
   */
  render() {
    const { usertype } = this.props.auth.user
    return (
      <nav className="navbar fixed-top navbar-auth">
        <div className="container">
          <Link className="brand" to="/">
            SendIT
          </Link>
          <ul className="navbar-nav ml-auto">
            <li>
              <NavDropdown
                title={
                  <span>
                    <img
                      className="rounded-circle"
                      src={user}
                      alt=""
                      style={{ width: "27px" }}
                    />
                  </span>
                }
              >
                {usertype === "user" && (
                  <Fragment>
                    <NavDropdown.Item as="button">
                      <Link to="/create-order">Create Order</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </Fragment>
                )}
                <NavDropdown.Item as="button" onClick={this.handleLogout}>
                  <Link to="/login">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
SignedInMenu.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(SignedInMenu)
