// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyD7jmnxjLEuz-uvfipFy2eij0KIm1DhCes",
  authDomain: "cot-p-fe781.firebaseapp.com",
  projectId: "cot-p-fe781",
  storageBucket: "cot-p-fe781.firebasestorage.app",
  messagingSenderId: "505943002786",
  appId: "1:505943002786:web:276573bb93cbd33545511fb"
};

// Inicializar app
const app = initializeApp(firebaseConfig);

// Exportar
export const auth = getAuth(app);
export const db = getFirestore(app);
