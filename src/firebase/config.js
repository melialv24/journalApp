// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqs7ygAY31rUr1sNlXiGNzoOKvLLfVlfU",
  authDomain: "react-curso-a8f1b.firebaseapp.com",
  projectId: "react-curso-a8f1b",
  storageBucket: "react-curso-a8f1b.appspot.com",
  messagingSenderId: "1095453972881",
  appId: "1:1095453972881:web:10451c72927179d056a230",
  measurementId: "G-0K1MJG689D",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
