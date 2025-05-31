import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ3GJepD8FmWPoU3e3DU3EJUEKwXAiNws",
  authDomain: "movie-portal-e807a.firebaseapp.com",
  projectId: "movie-portal-e807a",
  storageBucket: "movie-portal-e807a.firebasestorage.app",
  messagingSenderId: "1096162435553",
  appId: "1:1096162435553:web:7472f8c2cbfd33cb6872a0",
  measurementId: "G-JJF4Z68PTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;