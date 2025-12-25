// src/firebase/firebase.js
// Firebase configuration and initialization

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔐 Your Firebase configuration
// Replace these values with your own from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD5CtnM6Ek4ZBCxMse3iow0MPQCEsVRX_Q",
  authDomain: "ai-smart-allocation-engine.firebaseapp.com",
  projectId: "ai-smart-allocation-engine",
  storageBucket: "ai-smart-allocation-engine.firebasestorage.app",
  messagingSenderId: "1032474488242",
  appId: "1:1032474488242:web:7c616b19a8fc2eee9808ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
