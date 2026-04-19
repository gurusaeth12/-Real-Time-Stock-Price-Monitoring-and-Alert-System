// Firebase is initialized AFTER SDKs load — do NOT move this above the SDK script tags
// Replace these values with your own Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.database();

// Finnhub API key — from finnhub.io (free)
const FINNHUB_KEY = "d7ia2lhr01qu8vfnsq3gd7ia2lhr01qu8vfnsq40";
