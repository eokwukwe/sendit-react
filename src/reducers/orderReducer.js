import {
  GET_USER_ORDERS,
  GET_ALL_ORDERS,
  CREATE_ORDER,
  CHANGE_ORDER_LOCATION,
  CHANGE_ORDER_DESTINATION,
  CHANGE_ORDER_STATUS
} from "../actions/types"

const initialState = {
  orders: [],
  userOrders: []
}

export default (state = initialState, action) => {
  switch (action.type) {
  case CREATE_ORDER:
    return state
  case GET_ALL_ORDERS:
    return {
      ...state,
      orders: action.payload
    }
  case GET_USER_ORDERS:
    return {
      ...state,
      userOrders: action.payload
    }
  case CHANGE_ORDER_DESTINATION:
    return state
  case CHANGE_ORDER_LOCATION:
    return state
  case CHANGE_ORDER_STATUS:
    return state
  default:
    return state
  }
}
