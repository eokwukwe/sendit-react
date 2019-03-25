import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const initialState = {}

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const storeEnhancers = [middlewareEnhancer]
const composeEnhancer = composeWithDevTools(...storeEnhancers)
const store = createStore(rootReducer, initialState, composeEnhancer)

export default store
