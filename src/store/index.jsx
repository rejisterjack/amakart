import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import mainReducer from "../reducers/index"

export const store = createStore(
  mainReducer,
  { items: [], totalAmount: 0 },
  composeWithDevTools(applyMiddleware(thunk))
)
