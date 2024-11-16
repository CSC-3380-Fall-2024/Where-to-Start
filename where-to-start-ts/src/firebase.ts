// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxWA6RDFrBbiacPL8RwDViZXXel0-U0R0",
  authDomain: "where-to-start-3a131.firebaseapp.com",
  projectId: "where-to-start-3a131",
  storageBucket: "where-to-start-3a131.firebasestorage.app",
  messagingSenderId: "847078671397",
  appId: "1:847078671397:web:8f8fabf9d85acbf69e2bcc",
  measurementId: "G-QR59775MHK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();