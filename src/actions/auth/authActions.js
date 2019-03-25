import axios from "axios"
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode"
// import { toastr } from "react-redux-toastr"

import setAuthToken from "../../utils/setAuthToken"
import { GET_ERRORS, SET_CURRENT_USER } from "../types"
import { BASE_URL } from "../../utils/constants"

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${BASE_URL}/auth/signup`, userData)
    .then(() => history.push("/login"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

// Login - Get User Token
export const loginUser = userData => (dispatch) => {
  axios
    .post(`${BASE_URL}/auth/login`, userData)
    .then((res) => {
      // Get token for the response
      const { token } = res.data
      // Save token to localStorage
      localStorage.setItem("jwtToken", token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Log out user
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken")
  // Remove auth header from future Request
  setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
