import {
  GET_USER_ORDERS,
  GET_ALL_ORDERS,
  CREATE_ORDER,
  CHANGE_ORDER_DESTINATION
} from "../../actions/types"

import orderReducer from "../orderReducer"

const initialState = {
  orders: [],
  userOrders: []
}

describe("#### orderReducer", () => {
  it("should test for the initial state", () => {
    expect(orderReducer(initialState, {})).toEqual(initialState)
  })

  it("should handle the CREATE_ORDER action", () => {
    const action = {
      type: CREATE_ORDER,
      payload: {
        name: "kdldkl",
        title: "ndkldnd",
        destination: "lkdflkdsflk",
        pickup: "kdnfldkflkdsmf"
      }
    }
    expect(orderReducer(initialState, action)).toEqual({
      orders: [],
      userOrders: []
    })
  })

  it("should handle the GET_USER_ORDERS action", () => {
    const action = {
      type: GET_USER_ORDERS,
      payload: [
        {
          name: "kdldkl",
          title: "ndkldnd",
          destination: "lkdflkdsflk",
          pickup: "kdnfldkflkdsmf"
        }
      ]
    }
    expect(orderReducer(initialState, action)).toEqual({
      orders: [],
      userOrders: action.payload
    })
  })

  it("should handle the GET_ALL_ORDERS action", () => {
    const action = {
      type: GET_ALL_ORDERS,
      payload: [
        {
          name: "kdldkl",
          title: "ndkldnd",
          destination: "lkdflkdsflk",
          pickup: "kdnfldkflkdsmf"
        }
      ]
    }
    expect(orderReducer(initialState, action)).toEqual({
      orders: action.payload,
      userOrders: []
    })
  })

  it("should handle the CHANGE_ORDER_DESTINATION action", () => {
    const action = {
      type: CHANGE_ORDER_DESTINATION,
      payload: {
        name: "kdldkl",
        title: "ndkldnd",
        destination: "lkdflkdsflk",
        pickup: "kdnfldkflkdsmf"
      }
    }
    expect(orderReducer(initialState, action)).toEqual(initialState)
  })
})
