
import firebase , { initializeApp } from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: " AIzaSyAdgen0sCsN59FydLwKyoGnuX4ZqJ_YxtY",
  authDomain: "react-2d83c.firebaseapp.com",
  projectId: "react-2d83c",
  storageBucket: "react-2d83c.appspot.com",
  messagingSenderId: "122369831502",
  appId: "1:122369831502:web:fcc1146383e291039d491f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
