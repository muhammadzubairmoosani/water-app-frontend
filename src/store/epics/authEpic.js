import { Observable } from "rxjs/Rx";
import { authAction } from "../actions";
import { IS_LOGGED_IN } from "../contants";

export default class authEpic {
  static isLoggedIn = (action$) =>
    action$.ofType(IS_LOGGED_IN).switchMap(() => {
      return Observable.of(localStorage.getItem("user_token"))
        .catch((err) => authAction.isLoggedInFailure(err))
        .switchMap((res) => Observable.of(authAction.isLoggedInSuccess(res)));
    });
}
