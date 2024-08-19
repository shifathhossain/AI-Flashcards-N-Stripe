// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from 'firebase/firestore';
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiMbgX4_MI910GY2WyGuY-J6oEX1FI5lw",
  authDomain: "ai-flashcards-n-stripe.firebaseapp.com",
  projectId: "ai-flashcards-n-stripe",
  storageBucket: "ai-flashcards-n-stripe.appspot.com",
  messagingSenderId: "270778144228",
  appId: "1:270778144228:web:8dbd9203b5f5449a00e3f1",
  measurementId: "G-EDHJXPHDWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db};