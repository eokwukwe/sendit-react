/* eslint-disable max-len */
import React, { useState } from "react"
import { Link } from "react-router-dom"

import SignedOutMenu from "../../../components/Auth/SignedOutMenu/SignedOutMenu"
import Footer from "../../../components/common/Footer/Footer"
import Input from "../../../components/common/Input/Input"
import "./Login.scss"

export const Login = () => {
  const initialFormData = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const { email, password } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialFormData)
  }
  return (
    <React.Fragment>
      <SignedOutMenu />
      <div className="main main__auth">
        <div className="card shadow card__auth card__auth--login">
          <h2 className="card-header text-center card-header__auth">Login</h2>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                icon="fas fa-at"
                value={email}
                onChange={onChange}
                // error={errors.email}
              />

              <Input
                placeholder="Password"
                name="password"
                type="password"
                icon="fas fa-lock"
                value={password}
                onChange={onChange}
              />
              <input type="submit" value="Login" className="btn btn-block btn__auth mt-3" />
            </form>
          </div>
          <div
            className="card-footer text-muted text-center card-footer__auth card-footer__auth--login">
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

export default Login
