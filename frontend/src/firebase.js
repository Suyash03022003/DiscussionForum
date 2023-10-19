// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAG2GEljSEE3UgOWQxsNb69_JNikbMW_2k",
    authDomain: "bitdiscussionforum.firebaseapp.com",
    projectId: "bitdiscussionforum",
    storageBucket: "bitdiscussionforum.appspot.com",
    messagingSenderId: "574085477339",
    appId: "1:574085477339:web:869db18df6fc21fd83adfe",
    measurementId: "G-09SW60MBDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();