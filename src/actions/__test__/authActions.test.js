/* eslint-disable camelcase */
import jwt_decode from "jwt-decode"
import moxios from "moxios"
import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store"

import { loginUser, registerUser, logoutUser } from "../authActions"
import { GET_ERRORS, SET_CURRENT_USER } from "../types"
import authData from "../../__mock__/authData"

const middleware = [thunk]
const storeMock = configureMockStore(middleware)

describe("authActions", () => {
  let store
  beforeEach(() => {
    moxios.install()
    store = storeMock({})
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it("should dispatch no action on successful registration", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 201,
        response: authData.registerResponse
      })
    })

    const expectedActions = []

    return store
      .dispatch(registerUser(authData.register, authData.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it("should return firstName is too short error with incorrect first name", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: authData.incorrectRegisterResponse
      })
    })

    const expectedActions = [
      {
        type: GET_ERRORS,
        payload: authData.incorrectRegisterResponse
      }
    ]

    return store
      .dispatch(registerUser(authData.incorrectRegister, authData.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it("should dispatch the setCurrentUser action on successful login", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: authData.loginResponse
      })
    })
    const decoded = jwt_decode(authData.loginResponse.token)

    const expectedActions = [{ type: SET_CURRENT_USER, payload: decoded }]

    return store
      .dispatch(loginUser(authData.login, authData.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it("should return Incorrect password error when password is incorrect", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: authData.incorrectLoginResponse
      })
    })

    const expectedActions = [
      { type: GET_ERRORS, payload: authData.incorrectLoginResponse }
    ]

    return store
      .dispatch(loginUser(authData.incorrectLogin, authData.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it("should logout user", () => {
    const expectedActions = [{ type: SET_CURRENT_USER, payload: {} }]
    store.dispatch(logoutUser())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
