// Firebase ^9
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { API_KEY, MESSAGING_SENDER_ID, APP_ID } from "@env";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-auth-7f514.firebaseapp.com",
  projectId: "fir-auth-7f514",
  storageBucket: "fir-auth-7f514.appspot.com",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
