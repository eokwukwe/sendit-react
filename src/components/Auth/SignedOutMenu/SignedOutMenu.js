import React from "react"
import { Link } from "react-router-dom"
import "./SignedOutMenu.scss"

const SignedOutMenu = ({ link }) => (
  <nav className="navbar fixed-top navbar-auth">
    <div className="container">
      <Link className="brand" to="/">
        SendIT
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="btn btn-nav__auth"
            to={`/${link.replace(/\s/g, "")}`}
          >
            {link}
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default SignedOutMenu
