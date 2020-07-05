export default class authAction {
  ////////////////////////  CONTACT US  ////////////////////
  static contactUs(payload) {
    return {
      type: "CONTCT_US",
      payload,
    };
  }
  static contactUsSuccess(payload) {
    return {
      type: "CONTCT_US_SUCCESS",
      payload,
    };
  }
  static contactUsFailure(error) {
    return {
      type: "CONTCT_US_FAILURE",
      error,
    };
  }
}
