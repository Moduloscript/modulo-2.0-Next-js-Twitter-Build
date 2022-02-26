// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCdu0uy3mH0xc2G6twB9W4ZRlECByU07KA",
    authDomain: "modulo-twitter-nextjs-app.firebaseapp.com",
    projectId: "modulo-twitter-nextjs-app",
    storageBucket: "modulo-twitter-nextjs-app.appspot.com",
    messagingSenderId: "213081328904",
    appId: "1:213081328904:web:36c5e44c6ffe844db5f0bd"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };