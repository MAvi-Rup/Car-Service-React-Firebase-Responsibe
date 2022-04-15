// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaa99qwx-cT-fZ5T_Q-1GXCPbJBTsLcXI",
  authDomain: "genius-car-services-e4781.firebaseapp.com",
  projectId: "genius-car-services-e4781",
  storageBucket: "genius-car-services-e4781.appspot.com",
  messagingSenderId: "998380658458",
  appId: "1:998380658458:web:603c2ca6a4bcb3b7e1d6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;