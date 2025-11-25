import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7jmnxjLEuz-uvfiPfy2eijOKIm1DhCes",
  authDomain: "cot-p-fe781.firebaseapp.com",
  projectId: "cot-p-fe781",
  storageBucket: "cot-p-fe781.firebasestorage.app",
  messagingSenderId: "505943002786",
  appId: "1:505943002786:web:276578b93cbd33545511fb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
