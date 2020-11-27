import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

let middleWare = applyMiddleware(thunk);

const store = createStore(rootReducer, middleWare);

export default store;
