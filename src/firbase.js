// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3bKyCIa3KSTtN_YbwBZav2ulA7DL05A",
  authDomain: "test-b4233.firebaseapp.com",
  projectId: "test-b4233",
  storageBucket: "test-b4233.firebasestorage.app",
  messagingSenderId: "915102956044",
  appId: "1:915102956044:web:ceec57b6adce10ef818c29",
  measurementId: "G-GWG6R72J6B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth= getAuth();
export {app,auth};


