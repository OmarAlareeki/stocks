// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmU4H8-nAj0uBKQilSsIvEv16dXteRFw",
  authDomain: "stocksearch-ed206.firebaseapp.com",
  projectId: "stocksearch-ed206",
  storageBucket: "stocksearch-ed206.appspot.com",
  messagingSenderId: "303573564613",
  appId: "1:303573564613:web:0a7287e65129dd9efa84ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
