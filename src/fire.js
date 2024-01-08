// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwhA6NO9Hi5sDLWG5lwlomnvOox_bByGA",
    authDomain: "the-samurai-path.firebaseapp.com",
    projectId: "the-samurai-path",
    storageBucket: "the-samurai-path.appspot.com",
    messagingSenderId: "921302317221",
    appId: "1:921302317221:web:232954cc93d1297b1d754c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
