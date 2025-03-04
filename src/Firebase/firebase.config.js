import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw7sy-v_zQsfmDCp390py047aMOFAssVk",
  authDomain: "movie-portal-e466c.firebaseapp.com",
  projectId: "movie-portal-e466c",
  storageBucket: "movie-portal-e466c.firebasestorage.app",
  messagingSenderId: "814495861103",
  appId: "1:814495861103:web:c2d13ade17caea2491409a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth