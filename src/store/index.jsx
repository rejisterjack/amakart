import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"

const rootReducer = (state, action) => {
  return state
}

export const store = createStore(rootReducer, {}, applyMiddleware(thunk))
