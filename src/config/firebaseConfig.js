import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Firebase App Initialize
const app = initializeApp(firebaseConfig);
// Firebase Auth Initialize
const auth = getAuth()
// FireStore Initialize
const db = getFirestore()
export { app, auth, db };
