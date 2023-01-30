// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjrJ6vXOUHmzcGkgj60ytu3w5jofz-pmk",
  authDomain: "lots-saas.firebaseapp.com",
  projectId: "lots-saas",
  storageBucket: "lots-saas.appspot.com",
  messagingSenderId: "1052834242160",
  appId: "1:1052834242160:web:2e3148dc65658c67a41eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);