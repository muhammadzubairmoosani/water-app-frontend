import {
  IS_LOGGED_IN,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAILURE,
} from "../contants";

export default class authAction {
  ////////////////////////  CONTACT US  ////////////////////
  static login() {
    return {
      type: IS_LOGGED_IN,
    };
  }
  static loginSuccess(payload) {
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload,
    };
  }
  static loginFailure(error) {
    return {
      type: IS_LOGGED_IN_FAILURE,
      error,
    };
  }
}
