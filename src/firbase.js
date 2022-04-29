import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCc3AACmS69qtbgeDZM9GFUMZCJOY42JBA",
//     authDomain: "disney-clone-system.firebaseapp.com",
//     projectId: "disney-clone-system",
//     storageBucket: "disney-clone-system.appspot.com",
//     messagingSenderId: "125826853722",
//     appId: "1:125826853722:web:9c39bea14424d4f5dd6163",
//     measurementId: "G-YV0SENXQ0H"
// };
  

const firebaseConfig = {
    apiKey: "AIzaSyCMJ12txTS_O-rAsIV_52ccixVmzsGo9Ro",
    authDomain: "disney-clone-44fa6.firebaseapp.com",
    projectId: "disney-clone-44fa6",
    storageBucket: "disney-clone-44fa6.appspot.com",
    messagingSenderId: "781313934947",
    appId: "1:781313934947:web:0a3e31499594d521c01a56"
};
  
 initializeApp(firebaseConfig);

const db = getFirestore();


export default db;