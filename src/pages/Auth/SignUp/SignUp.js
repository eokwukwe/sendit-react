import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./SignUp.scss"
import SignedOutMenu from "../../../components/Auth/SignedOutMenu/SignedOutMenu"
import Footer from "../../../components/common/Footer/Footer"
import Input from "../../../components/common/Input/Input"

export const SignUp = () => {
  const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const {
    firstname, lastname, email, password
  } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialFormData)
  }
  return (
    <React.Fragment>
      <SignedOutMenu />
      <div className="main main__auth">
        <div className="card shadow card__auth">
          <h2 className="card-header text-center card-header__auth">Sign Up</h2>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <Input
                placeholder="First name"
                name="firstname"
                type="text"
                icon="fas fa-user"
                value={firstname}
                onChange={onChange}
                // error={errors.name}
              />

              <Input
                placeholder="Last name"
                name="lastname"
                type="text"
                icon="fas fa-user"
                value={lastname}
                onChange={onChange}
                // error={errors.email}
              />

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
                // error={errors.password}
                info="Password must be at least 6 characters with at least 1 uppercase 1
              lowercase and 1 special character (#?!@$%^&*-.)"
              />
              <small className="form-text text-muted">
                Password must be at least 6 characters with at least 1 uppercase
                1 lowercase and 1 special character (#?!@$%^&*-.)
              </small>
              <input type="submit" value="Sign up" className="btn btn-block btn__auth mt-3" />
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

export default SignUp
