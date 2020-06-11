import { combineEpics } from "redux-observable";
import authEpic from "./authEpic";

const rootEpic = combineEpics(authEpic.signIn);

export default rootEpic;
