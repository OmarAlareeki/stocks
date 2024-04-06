// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
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
export const auth = getAuth(app);
export default app;
