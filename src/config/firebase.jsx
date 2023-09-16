// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTXLc-7ATointjQk7StqcGMCB40vyZi8g",
  authDomain: "task-manager-b38a5.firebaseapp.com",
  projectId: "task-manager-b38a5",
  storageBucket: "task-manager-b38a5.appspot.com",
  messagingSenderId: "348266200890",
  appId: "1:348266200890:web:4726d222d7a209591f9a03",
  measurementId: "G-XJ0GXDBMKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication ref
export const auth = getAuth(app);

// Database Ref
export const db = getFirestore(app);

// collection reference
export const newTaskRef=collection(db,"Tasks")
