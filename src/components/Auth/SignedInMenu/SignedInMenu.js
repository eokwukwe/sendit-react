import React from "react"
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"
import "./SignedInMenu.scss"
import avatar from "../../../../public/assets/images/avatar.png"

const SignedOutMenu = () => (
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
                <img className="rounded-circle" src={avatar} alt="" style={{ width: "33px" }} />
              </span>
            }>
            <NavDropdown.Item><Link to="/create-order">Create Order</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Link to="/login">Logout</Link></NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
    </div>
  </nav>
)

export default SignedOutMenu
