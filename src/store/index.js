import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { notificationReducer } from "./reducers";

const rootReducer = combineReducers({
  notificationReducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
