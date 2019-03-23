import { combineReducers } from "redux"
import { reducer as toastrReducer } from "react-redux-toastr"
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"
import orderReducer from "./orderReducer"

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  toastr: toastrReducer,
  orders: orderReducer
})
