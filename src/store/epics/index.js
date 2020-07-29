import { combineEpics } from "redux-observable";
import authEpic from "./authEpic";
// import supplierEpic from "./supplierEpic";

const rootEpic = combineEpics(authEpic.signIn);

export default rootEpic;
