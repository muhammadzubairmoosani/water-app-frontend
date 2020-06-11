import { Observable } from "rxjs/Rx";
import { authAction } from "../actions/index";

export default class authEpic {
  static signIn = (action$) =>
    action$.ofType("SIGNIN").switchMap(({ payload }) => {
      console.log("autoEpic", payload);
    });
}
