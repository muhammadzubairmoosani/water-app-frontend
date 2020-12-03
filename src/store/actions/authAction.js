import {
  LOGGED_IN_IS_LOADING,
  LOGGED_IN_SUCCESS,
  LOGGED_IN_FAILURE,
  SIGN_UP_IS_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  IS_LOGGED_IN_IS_LOADING,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAILURE,
} from "../contants";

export default class authAction {
  ////////////////////////  CONTACT US  ////////////////////
  static loginIsLoading() {
    return {
      type: LOGGED_IN_IS_LOADING,
    };
  }
  static loginSuccess(payload) {
    return {
      type: LOGGED_IN_SUCCESS,
      payload,
    };
  }
  static loginFailure(error) {
    return {
      type: LOGGED_IN_FAILURE,
      error,
    };
  }

  static signUpIsLoading() {
    return {
      type: SIGN_UP_IS_LOADING,
    };
  }
  static signUpSuccess(payload) {
    return {
      type: SIGN_UP_SUCCESS,
      payload,
    };
  }
  static signUpFailure(error) {
    return {
      type: SIGN_UP_FAILURE,
      error,
    };
  }

  static isLoggedInIsLoading() {
    return {
      type: IS_LOGGED_IN_IS_LOADING,
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
