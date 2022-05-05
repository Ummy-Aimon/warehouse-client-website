// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nbdJhABLufNy-sxh19bZEDah7BOPsNs",
  authDomain: "fruits-warehouse-client-side.firebaseapp.com",
  projectId: "fruits-warehouse-client-side",
  storageBucket: "fruits-warehouse-client-side.appspot.com",
  messagingSenderId: "78054949702",
  appId: "1:78054949702:web:ecc8ea35fcc71b04be5b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=  getAuth(app)
export default auth;