// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6qAWVMtfFpmuhr2GY0rrjN2LYMbmBoJo",
  authDomain: "character-interaction-engine.firebaseapp.com",
  projectId: "character-interaction-engine",
  storageBucket: "character-interaction-engine.appspot.com",
  messagingSenderId: "758446330757",
  appId: "1:758446330757:web:403990dd02e63b251eaaec",
  measurementId: "G-D7ZXR0P213",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
