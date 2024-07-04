import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAf9hUkup5H7sYcqeR_t2nk7S_td9Fupdo",
    authDomain: "studynt-alx.firebaseapp.com",
    projectId: "studynt-alx",
    storageBucket: "studynt-alx.appspot.com",
    messagingSenderId: "84292910854",
    appId: "1:84292910854:web:a30a526d8dc1d99c216887",
    measurementId: "G-FQX9WFCDZN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
