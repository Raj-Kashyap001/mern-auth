// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "raj-mern-auth.firebaseapp.com",
  projectId: "raj-mern-auth",
  storageBucket: "raj-mern-auth.firebasestorage.app",
  messagingSenderId: "810645248844",
  appId: "1:810645248844:web:815c31ea27bf3fd7010de9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
