import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCc3AACmS69qtbgeDZM9GFUMZCJOY42JBA",
    authDomain: "disney-clone-system.firebaseapp.com",
    projectId: "disney-clone-system",
    storageBucket: "disney-clone-system.appspot.com",
    messagingSenderId: "125826853722",
    appId: "1:125826853722:web:9c39bea14424d4f5dd6163",
    measurementId: "G-YV0SENXQ0H"
}
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export  {auth, db}