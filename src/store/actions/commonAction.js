import {
  CONTACT_US_IS_LOADING,
  CONTACT_US_FAILURE,
  CONTACT_US_SUCCESS,
} from "../contants";

export default class commonAction {
  ////////////////////////  CONTACT US  ////////////////////
  static contactUsIsLoading() {
    return {
      type: CONTACT_US_IS_LOADING,
    };
  }
  static contactUsSuccess() {
    return {
      type: CONTACT_US_SUCCESS,
    };
  }
  static contactUsFailure(error) {
    return {
      type: CONTACT_US_FAILURE,
      error,
    };
  }
}
