// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZQm0ohmrkI9eDU9W3yQkBreWDB1p484k",
  authDomain: "auth-private-route-project.firebaseapp.com",
  projectId: "auth-private-route-project",
  storageBucket: "auth-private-route-project.appspot.com",
  messagingSenderId: "599481018498",
  appId: "1:599481018498:web:ebb3adcb4bc24d7f112c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth