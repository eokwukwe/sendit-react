/* eslint-disable max-len */
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import SignedOutMenu from "../../../components/Auth/SignedOutMenu/SignedOutMenu"
import Footer from "../../../components/common/Footer/Footer"
import Input from "../../../components/common/Input/Input"
import "./Login.scss"
import { loginUser } from "../../../actions/authActions"
import Spinner from "../../../components/common/Spinner/Spinner"

/**
 * @description Renders the Login Page
 * @param {object} e DOM event object
 * @return {JSX} - returns the page JSX
 */
export class Login extends Component {
  state = {
    loginData: {
      userEmail: "",
      password: ""
    },
    errors: {},
    loading: false
  };

  /**
   * @description - Update the errors state when the user
   * enters an invalid data
   * @param {*} prevProps
   * @returns {void}
   */
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors, loading: false })
    }
  }

  /**
   * @param {*} e - event
   * @returns {object} - Changed state
   */
  onChange = (e) => {
    this.setState({ errors: {} })
    const { name, value } = e.target
    const loginData = { ...this.state.loginData }
    loginData[name] = value
    this.setState({ loginData })
  };

  onSubmit = (e) => {
    this.setState({ errors: {}, loading: true })
    e.preventDefault()
    this.props.loginUser(this.state.loginData, this.props.history)
  };

  /**
   * @returns {JSX} - Login Template
   */
  render() {
    const {
      loginData: { userEmail, password },
      errors
    } = this.state
    return (
      <React.Fragment>
        <SignedOutMenu link={"sign up"} />
        <div className="main main__auth" style={{ position: "relative" }}>
          {this.state.loading && <Spinner />}
          <div className="card card__auth card__auth--login">
            <h2 className="card-header text-center card-header__auth">Login</h2>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <Input
                  placeholder="Email Address"
                  name="userEmail"
                  type="email"
                  icon="fas fa-at"
                  value={userEmail}
                  onChange={this.onChange}
                  error={errors.userEmail}
                  autoFocus={true}
                />

                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  icon="fas fa-lock"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password || errors.message}
                />
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-block btn__auth mt-3"
                />
              </form>
            </div>
            <div className="card-footer text-muted text-center card-footer__auth card-footer__auth--login">
              <span>
                <Link to="forgot-password">Forgot Password?</Link>
              </span>
              <span>
                No account? <Link to="/signup">Sign up</Link>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login))
