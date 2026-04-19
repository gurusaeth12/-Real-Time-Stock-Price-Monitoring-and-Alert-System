// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABnX5__BMCYFvTL9lrFnqMFif5204BCCg",
  authDomain: "stock-bae58.firebaseapp.com",
  projectId: "stock-bae58",
  storageBucket: "stock-bae58.firebasestorage.app",
  messagingSenderId: "39423409116",
  appId: "1:39423409116:web:394a06c9cdce5ae817ed19",
  measurementId: "G-J64G99ZEV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
