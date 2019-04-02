import {
  GET_USER_ORDERS,
  GET_ALL_ORDERS,
  ORDER_LOADING,
  CREATE_ORDER,
  CHANGE_ORDER_DESTINATION
} from "../../actions/types"

import orderReducer from "../orderReducer"

const initialState = {
  orders: [],
  userOrders: [],
  loading: false
}

describe("#### orderReducer", () => {
  it("should test for the initial state", () => {
    expect(orderReducer(initialState, {})).toEqual(initialState)
  })

  it("should handle the ORDER_LOADING action", () => {
    const action = {
      type: ORDER_LOADING,
      loading: true
    }
    expect(orderReducer(initialState, action)).toEqual({
      loading: true,
      orders: [],
      userOrders: []
    })
  })

  it("should handle the CREATE_ORDER action", () => {
    const action = {
      type: CREATE_ORDER,
      payload: {
        name: "kdldkl",
        title: "ndkldnd",
        destination: "lkdflkdsflk",
        pickup: "kdnfldkflkdsmf"
      },
      loading: false
    }
    expect(orderReducer(initialState, action)).toEqual({
      loading: false,
      orders: [],
      userOrders: [...initialState.userOrders, action.payload]
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
      ],
      loading: false
    }
    expect(orderReducer(initialState, action)).toEqual({
      loading: false,
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
      ],
      loading: false
    }
    expect(orderReducer(initialState, action)).toEqual({
      loading: false,
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
