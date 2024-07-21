// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDspUt-0zVPqODboB5FlF788QGeRGb5lr8",
  authDomain: "gamesource-dfb21.firebaseapp.com",
  projectId: "gamesource-dfb21",
  storageBucket: "gamesource-dfb21.appspot.com",
  messagingSenderId: "872459057260",
  appId: "1:872459057260:web:f75580aa9c56b25ec94049",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
