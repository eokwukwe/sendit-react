/* eslint-disable max-len */
import { GET_ERRORS, CLEAR_ERRORS } from "../../actions/types"
import errorReducer from "../errorReducer"

describe("#### errorReducer", () => {
  const initialState = {}
  const action = {
    type: GET_ERRORS,
    payload: {
      firstName: "firstname is too short",
      lastName: "lastname is too short",
      password:
        "password must be at least 6 characters with at least 1 uppercase, 1 lowercase & 1 special character",
      userEmail: "invalid email"
    }
  }

  it("should return initial state when user is not logged in", () => {
    const returnedState = errorReducer(initialState, {})
    expect(returnedState).toEqual(initialState)
  })

  it("should return an update state when user is logged in", () => {
    const returnedState = errorReducer(initialState, action)
    expect(returnedState).toEqual(action.payload)
  })

  it("should return an update state when user is logged in", () => {
    const action1 = { type: CLEAR_ERRORS }
    const returnedState = errorReducer(initialState, action1)
    expect(returnedState).toEqual({})
  })
})
