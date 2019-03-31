import React, { Component } from "react"
import { Link } from "react-router-dom"
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
                <NavDropdown.Item as="button">
                  <Link to="/create-order">Create Order</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
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

export default connect(
  null,
  { logoutUser }
)(SignedInMenu)
