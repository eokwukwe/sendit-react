import React from "react";
import {
  Navbar, NavbarBrand, NavItem, Nav, NavLink, Container,
} from "reactstrap";
import "./HomePage.scss";

/**
 * @description Renders the Homepage
 * @return {JSX} - returns the page JSX
 */
const HomePage = () => (
  <React.Fragment>
    <Navbar fixed="top">
      <Container>
        <NavbarBrand className="brand" href="/">
          SendIT
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="btn btn-nav__home" href="/login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    <div className="home-page">
      <h1>Welcome to SendIT</h1>
      <p>The easiest and fastest means to deliver your parcel.</p>
      <p>
        Simply{" "}
        <a className="signup-index" href="signup.html">
          Sign Up
        </a>{" "}
        and start sending.
      </p>
    </div>
  </React.Fragment>
);

export default HomePage;
