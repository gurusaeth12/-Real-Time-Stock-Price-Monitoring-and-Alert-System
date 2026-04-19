const firebaseConfig = {
  apiKey: "AIzaSyABnX5__BMCYFvTL9lrFnqMFif5204BCCg",
  authDomain: "stock-bae58.firebaseapp.com",
  databaseURL: "https://stock-bae58-default-rtdb.firebaseio.com",
  projectId: "stock-bae58",
  storageBucket: "stock-bae58.firebasestorage.app",
  messagingSenderId: "39423409116",
  appId: "1:39423409116:web:394a06c9cdce5ae817ed19",
  measurementId: "G-J64G99ZEV5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
