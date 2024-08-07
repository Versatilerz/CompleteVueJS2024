import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPDVx-s8vR_noNKqX9wxgzgs5-IYoDKwI",
  authDomain: "fbasep-e420a.firebaseapp.com",
  projectId: "fbasep-e420a",
  storageBucket: "fbasep-e420a.appspot.com",
  messagingSenderId: "1073485140897",
  appId: "1:1073485140897:web:1d5ff16f659cc3b27731e0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

///DB
const DB = getFirestore();
// Auth
const auth = getAuth();

export { DB, auth };
