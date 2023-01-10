// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "personal-website-43320.firebaseapp.com",
    projectId: "personal-website-43320",
    storageBucket: "personal-website-43320.appspot.com",
    messagingSenderId: "413282879099",
    appId: "1:413282879099:web:6ecf1edc7d307551f504de"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
