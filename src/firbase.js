import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCy9wf8e9LVPmP9PccWGCGHtR5v2nfOpbI",
  authDomain: "k2-ecommerce-solution.firebaseapp.com",
  projectId: "k2-ecommerce-solution",
  storageBucket: "k2-ecommerce-solution.appspot.com",
  messagingSenderId: "184512177454",
  appId: "1:184512177454:web:88772082f89f94edcf06bf",
  measurementId: "G-939V0Q5SMH"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();
export {app,auth};
