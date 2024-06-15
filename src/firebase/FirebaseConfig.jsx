// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB543juoqn_WKGUTLZQihGj3CIOMC9AwaQ",
  authDomain: "savvystore-718ae.firebaseapp.com",
  projectId: "savvystore-718ae",
  storageBucket: "savvystore-718ae.appspot.com",
  messagingSenderId: "564765663077",
  appId: "1:564765663077:web:455964979d898831a58b8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
