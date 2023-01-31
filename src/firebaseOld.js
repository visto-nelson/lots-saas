import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjrJ6vXOUHmzcGkgj60ytu3w5jofz-pmk",
  authDomain: "lots-saas.firebaseapp.com",
  projectId: "lots-saas",
  storageBucket: "lots-saas.appspot.com",
  messagingSenderId: "1052834242160",
  appId: "1:1052834242160:web:2e3148dc65658c67a41eb5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth().GoogleAuthProvider();

export { auth, provider };
export default db;