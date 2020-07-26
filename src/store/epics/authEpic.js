import { Observable } from "rxjs/Rx";
import { authAction } from "../actions";

export default class authEpic {
  static signIn = (action$) =>
    action$.ofType("SIGNIN").switchMap(({ payload }) => {
      console.log("autoEpic", payload);
    });
}
