import { createContext } from "react";
import { auth } from "../config";
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'

// set captcha container
const _captcha = (id) => {
  window.recaptchaVerifier = new RecaptchaVerifier(id, { size: "invisible" }, auth);
};

// send OTP into mobile number
const _sendCode = (mobile) => {
  const phoneNumber = `+92${mobile}`;
  const appVerifier = window.recaptchaVerifier;
  return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
};

const _isEven = (value) => (value % 2 === 0 ? true : false);

const ThemeContext = createContext("context");

export { _captcha, _sendCode, _isEven, ThemeContext };
