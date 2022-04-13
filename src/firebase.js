// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzG7gJChWZ_q3FFGA7J-9d0M5R6EeeQBk",
  authDomain: "linkedin-clone-154fe.firebaseapp.com",
  projectId: "linkedin-clone-154fe",
  storageBucket: "linkedin-clone-154fe.appspot.com",
  messagingSenderId: "572729390754",
  appId: "1:572729390754:web:6a777cf6267d45a8b509fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const db =  getFirestore(app);
const auth = getAuth();

export {db , auth}