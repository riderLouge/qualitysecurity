// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzlBzPQbW4EYmLDbe12ihcPG9jV5WR_VQ",
  authDomain: "quality-security-services.firebaseapp.com",
  projectId: "quality-security-services",
  storageBucket: "quality-security-services.appspot.com",
  messagingSenderId: "858346393549",
  appId: "1:858346393549:web:581a16cea12ddce8c73e84",
  measurementId: "G-MS6WD5CK8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
