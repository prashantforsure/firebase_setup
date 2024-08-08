// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string; // Optional if you have it in your config
}

const firebaseConfig: FirebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID // Optional
};

// Initialize Firebase
let firebase_app: FirebaseApp;
const apps = getApps();
firebase_app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];

export default firebase_app;
