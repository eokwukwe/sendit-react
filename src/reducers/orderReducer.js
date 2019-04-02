import {
  GET_USER_ORDERS,
  GET_ALL_ORDERS,
  ORDER_LOADING,
  CREATE_ORDER,
  CHANGE_ORDER_DESTINATION
} from "../actions/types"

const initialState = {
  orders: [],
  userOrders: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ORDER_LOADING:
    return {
      ...state,
      loading: true
    }
  case CREATE_ORDER:
    return {
      ...state,
      userOrders: [...state.userOrders, action.payload],
      loading: false
    }
  case GET_ALL_ORDERS:
    return {
      ...state,
      orders: action.payload,
      loading: false
    }
  case GET_USER_ORDERS:
    return {
      ...state,
      userOrders: action.payload,
      loading: false
    }
  case CHANGE_ORDER_DESTINATION:
    return state
  default:
    return state
  }
}
