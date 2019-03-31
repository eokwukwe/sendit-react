/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import axios from "axios"
import { toastr } from "react-redux-toastr"
import {
  GET_ERRORS,
  GET_USER_ORDERS,
  GET_ALL_ORDERS,
  ORDER_LOADING,
  CLEAR_ERRORS,
  CREATE_ORDER,
  CANCEL_ORDER,
  CHANGE_ORDER_DESTINATION
} from "./types"
import { BASE_URL } from "../utils/constants"

export const orderLoading = () => ({
  type: ORDER_LOADING
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createOrder = data => (dispatch) => {
  dispatch(clearErrors())
  axios
    .post(`${BASE_URL}/parcels`, data)
    .then((res) => {
      dispatch({
        type: CREATE_ORDER,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const getAllOrders = () => (dispatch) => {
  dispatch(orderLoading())
  axios
    .get(`${BASE_URL}/parcels`)
    .then((res) => {
      dispatch({
        type: GET_ALL_ORDERS,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_ORDERS,
        payload: null
      })
    })
}

export const getUserOrders = userId => (dispatch) => {
  dispatch(orderLoading())
  axios
    .get(`${BASE_URL}/users/${userId}/parcels`)
    .then((res) => {
      dispatch({
        type: GET_USER_ORDERS,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_ORDERS,
        payload: null
      })
    })
}

export const changeOrderDestination = (parcelId, userId, address) => (dispatch) => {
  axios
    .put(`${BASE_URL}/parcels/${parcelId}/destination`, address)
    .then((res) => {
      dispatch({
        type: CHANGE_ORDER_DESTINATION
      })
      toastr.success("Parcel destination has been changed")
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      toastr.error("Could not change destination")
    })
}

export const cancelOrder = parcelId => (dispatch) => {
  axios
    .delete(`${BASE_URL}/parcels/${parcelId}/cancel`)
    .then((res) => {
      dispatch({
        type: CANCEL_ORDER,
        payload: res.data
      })
      toastr.success("Parcel has been cancelled")
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      toastr.error("Parcel could not be cancelled")
    })
}
