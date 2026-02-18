//apiKey: import.meta.env.VITE_API_KEY,

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DouSFjSunStMli2bir2V1ZlSnlaHFvE",
  authDomain: "petsecommerce-ce811.firebaseapp.com",
  projectId: "petsecommerce-ce811",
  storageBucket: "petsecommerce-ce811.firebasestorage.app",
  messagingSenderId: "333326901926",
  appId: "1:333326901926:web:87b47f77509dadd4198a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
