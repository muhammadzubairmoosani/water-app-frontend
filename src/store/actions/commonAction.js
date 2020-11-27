import {
  CONTACT_US,
  CONTACT_US_FAILURE,
  CONTACT_US_SUCCESS,
} from "../contants";

export default class commonAction {
  ////////////////////////  CONTACT US  ////////////////////
  static contactUs() {
    return {
      type: CONTACT_US,
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
