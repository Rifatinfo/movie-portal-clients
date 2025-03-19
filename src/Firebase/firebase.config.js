import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcQOSzoz4vN8KmUNdiuujuB6w1YKMND6w",
  authDomain: "movie-portal-b70d9.firebaseapp.com",
  projectId: "movie-portal-b70d9",
  storageBucket: "movie-portal-b70d9.firebasestorage.app",
  messagingSenderId: "104332814219",
  appId: "1:104332814219:web:83f83cab6c42003415f18e",
  measurementId: "G-EZ9NKW1PED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth