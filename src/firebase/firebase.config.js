// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl_psFyYw38BXIijuDRw9soVwRhoyIFDw",
  authDomain: "simple-hotel-dubai.firebaseapp.com",
  projectId: "simple-hotel-dubai",
  storageBucket: "simple-hotel-dubai.appspot.com",
  messagingSenderId: "506065021482",
  appId: "1:506065021482:web:87d386706d1cc98ac8f153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;