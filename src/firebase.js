// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Gfb2Cf7GzB-5CnXYwG6qEwuwN_Q5IBE",
  authDomain: "chat-react-ef339.firebaseapp.com",
  projectId: "chat-react-ef339",
  storageBucket: "chat-react-ef339.firebasestorage.app",
  messagingSenderId: "3753070798",
  appId: "1:3753070798:web:f153d3562c69cd0acb409f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};