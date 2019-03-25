import authReducer from "../authReducer"
import { SET_CURRENT_USER } from "../../actions/types"

describe("#### authReducer", () => {
  const initialState = {
    isAuthenticated: false,
    user: {}
  }
  const action = {
    type: SET_CURRENT_USER,
    payload: {
      exp: 1553542337,
      firstname: "John",
      iat: 1553517137,
      lastname: "Doe",
      userId: 77,
      usertype: "user"
    }
  }

  it("should return initial state when user is not logged in", () => {
    const returnedState = authReducer(initialState, {})
    expect(returnedState).toEqual(initialState)
  })

  it("should return an update state when user is logged in", () => {
    const returnedState = authReducer(initialState, action)
    expect(returnedState).toEqual({
      isAuthenticated: true,
      user: action.payload
    })
  })
})
