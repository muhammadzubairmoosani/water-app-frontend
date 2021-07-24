import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAQckZWWmP-NfkcjPN_qqFegdVNU2zW-MA",
  authDomain: "pani-wala-f7ad8.firebaseapp.com",
  databaseURL: "https://pani-wala-f7ad8.firebaseio.com",
  projectId: "pani-wala-f7ad8",
  storageBucket: "pani-wala-f7ad8.appspot.com",
  messagingSenderId: "240780480077",
  appId: "1:240780480077:web:891be69d44566cfdc89604",
  measurementId: "G-720JZE8LD5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
