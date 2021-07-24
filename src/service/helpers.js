import { createContext } from "react";
import { firebase } from "../config";
import { Notification } from "../components/common";

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();


// set captcha container
export const _captcha = (id) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
    size: "invisible",
  });
};

// send OTP into mobile number
export const _sendCode = (mobile) => {
  const phoneNumber = `+92${mobile}`;
  const appVerifier = window.recaptchaVerifier;
  return firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
};

export const _isEven = (value) => (value % 2 === 0 ? true : false);

// sign in or sign up with google
export const _signInWithGoogle = (loading_cb, provider) => {
  // debugger
  loading_cb(true)
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
      document.cookie = `session=${result?.credential?.idToken}`
      loading_cb(false)
    }).catch((error) => {
      Notification.error(error)
      loading_cb(false)
    });
}

export const _getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}



export const ThemeContext = createContext("context");

// export { _captcha, _sendCode, _isEven, ThemeContext };
