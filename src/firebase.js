import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjrJ6vXOUHmzcGkgj60ytu3w5jofz-pmk",
  authDomain: "lots-saas.firebaseapp.com",
  projectId: "lots-saas",
  storageBucket: "lots-saas.appspot.com",
  messagingSenderId: "1052834242160",
  appId: "1:1052834242160:web:2e3148dc65658c67a41eb5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => {

    signInWithPopup(auth, provider)
    .then((result)=> {
        console.log(result);
        
    })
    .catch((error) => alert(error.message));
}

