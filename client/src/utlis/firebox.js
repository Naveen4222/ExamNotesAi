// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEAPIKEY,
  authDomain: "authexamnotes-951b7.firebaseapp.com",
  projectId: "authexamnotes-951b7",
  storageBucket: "authexamnotes-951b7.firebasestorage.app",
  messagingSenderId: "19123006466",
  appId: "1:19123006466:web:5a7331f6b882ad81f48b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider,signOut}