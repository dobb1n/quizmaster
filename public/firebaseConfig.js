// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2h2SPcbwSc8WsQsNc6-wTnsgtJhtrxkQ",
    authDomain: "quizmaster-1608.firebaseapp.com",
    databaseURL: "https://quizmaster-1608-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizmaster-1608",
    storageBucket: "quizmaster-1608.firebasestorage.app",
    messagingSenderId: "555806179191",
    appId: "1:555806179191:web:2fe6ae71f62c492a4fab72"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
