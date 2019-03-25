import { combineReducers } from "redux"
import { reducer as toastrReducer } from "react-redux-toastr"
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  toastr: toastrReducer
})
