import {
  IS_LOGGED_IN,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAILURE,
} from "../contants";

export default class authAction {
  ////////////////////////  CONTACT US  ////////////////////
  static isLoggedIn() {
    return {
      type: IS_LOGGED_IN,
    };
  }
  static isLoggedInSuccess(payload) {
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload,
    };
  }
  static isLoggedInFailure(error) {
    return {
      type: IS_LOGGED_IN_FAILURE,
      error,
    };
  }
}
