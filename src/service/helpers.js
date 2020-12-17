import { firebase } from "../config";

// set captcha container
const _captcha = (id) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
    size: "invisible",
  });
};

// send OTP into mobile number
const _sendCode = (mobile) => {
  const phoneNumber = `+92${mobile}`;
  const appVerifier = window.recaptchaVerifier;
  return firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
};

const _isEven = (value) => (value % 2 == 0 ? true : false);

export { _captcha, _sendCode, _isEven };
