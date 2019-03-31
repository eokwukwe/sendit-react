import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"

import "./SignUp.scss"
import SignedOutMenu from "../../../components/Auth/SignedOutMenu/SignedOutMenu"
import Footer from "../../../components/common/Footer/Footer"
import Input from "../../../components/common/Input/Input"
import { registerUser } from "../../../actions/authActions"

/**
 * @description Renders the Homepage
 * @param {object} e DOM event object
 * @return {JSX} - returns the page JSX
 */
export class SignUp extends Component {
  state = {
    userData: {
      firstName: "",
      lastName: "",
      userEmail: "",
      password: ""
    },
    errors: {}
  };

  /**
   * @description - Update the errors state when the user
   * enters an invalid data
   * @param {*} prevProps
   * @returns {void}
   */
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }

  onChange = (e) => {
    const { name, value } = e.target
    const userData = { ...this.state.userData }
    userData[name] = value
    this.setState({ userData })
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.registerUser(this.state.userData, this.props.history)
  };

  /**
   * @returns {JSX} - Sign up Template
   */
  render() {
    const {
      userData: {
        firstName, lastName, userEmail, password
      },
      errors
    } = this.state

    return (
      <React.Fragment>
        <SignedOutMenu link={"login"} />
        <div className="main main__auth">
          <div className="card card__auth">
            <h2 className="card-header text-center card-header__auth">
              Sign Up
            </h2>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <Input
                  placeholder="First name"
                  name="firstName"
                  type="text"
                  icon="fas fa-user"
                  value={firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                />

                <Input
                  placeholder="Last name"
                  name="lastName"
                  type="text"
                  icon="fas fa-user"
                  value={lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                />

                <Input
                  placeholder="Email Address"
                  name="userEmail"
                  type="email"
                  icon="fas fa-at"
                  value={userEmail}
                  onChange={this.onChange}
                  error={errors.userEmail || errors.message}
                />

                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  icon="fas fa-lock"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                  info="Password must be at least 6 characters with at least 1 uppercase 1
              lowercase and 1 special character (#?!@$%^&*-.)"
                />
                <small className="form-text text-muted">
                  Password must be at least 6 characters with at least 1
                  uppercase 1 lowercase and 1 special character (#?!@$%^&*-.)
                </small>
                <input
                  type="submit"
                  value="Sign up"
                  className="btn btn-block btn__auth mt-3"
                />
              </form>
            </div>
            <div className="card-footer text-muted text-center card-footer__auth">
              Already registered? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp))
