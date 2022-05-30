// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd9S4ZoaHWM2sBInJwRZIVAWq5zc6vcoU",
    authDomain: "doctor-portal-16c36.firebaseapp.com",
    projectId: "doctor-portal-16c36",
    storageBucket: "doctor-portal-16c36.appspot.com",
    messagingSenderId: "797344988754",
    appId: "1:797344988754:web:51fbe5a29f62f48d8fa98b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const auth = getAuth(app);

export default auth;