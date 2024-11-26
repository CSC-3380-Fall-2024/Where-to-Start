// firebase.ts: Firebase setup

// Import the functions we need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore database
import { getAnalytics } from "firebase/analytics"; // For analytics

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxWA6RDFrBbiacPL8RwDViZXXel0-U0R0",
  authDomain: "where-to-start-3a131.firebaseapp.com",
  projectId: "where-to-start-3a131",
  storageBucket: "where-to-start-3a131.appspot.com", // Fixed 'firebasestorage.app' typo
  messagingSenderId: "847078671397",
  appId: "1:847078671397:web:8f8fabf9d85acbf69e2bcc",
  measurementId: "G-QR59775MHK",
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig); // Core Firebase initialization
const auth = getAuth(); // Firebase Authentication
const db = getFirestore(); // Firestore database
const analytics = getAnalytics(app); // Firebase Analytics

// Export initialized services
export { app, auth, db, analytics };
