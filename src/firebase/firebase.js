import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBojzPU_CNAIGXK37HX3CKZffBaYxPX-wc",
  authDomain: "class2dec-bc894.firebaseapp.com",
  projectId: "class2dec-bc894",
  storageBucket: "class2dec-bc894.appspot.com",
  messagingSenderId: "116402706153",
  appId: "1:116402706153:web:fbe51e768e0f9836e68278",
  measurementId: "G-FYT1C7LGXL"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore()
export{
    app,
    dataBase,
}