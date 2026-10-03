// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUI6tGc0oT-udp5n1rGTPE7LXtfKzQM_U",
  authDomain: "voter-ff6f1.firebaseapp.com",
  projectId: "voter-ff6f1",
  storageBucket: "voter-ff6f1.appspot.com", // corrected
  messagingSenderId: "763403760383",
  appId: "1:763403760383:web:1c9d735fd692d801dd52ca",
  measurementId: "G-TMTER50VVM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { RecaptchaVerifier, signInWithPhoneNumber };
