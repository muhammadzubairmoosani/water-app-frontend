// // import { combineEpics } from "redux-observable";
// import authEpic from "./authEpic";
// import commonEpic from "./commonEpic";
// import {create} from 'redux'
// const rootEpic = combineEpics({
//   authEpic,
//   commonEpic,
// });

// export default rootEpic;

import commonEpic from "./commonEpic";

export { commonEpic };
