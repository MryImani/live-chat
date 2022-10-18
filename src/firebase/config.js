
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth , createUserWithEmailAndPassword} from "@firebase/auth";
import { serverTimestamp } from '@firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVqCsbY-ofVIzXVIVMy_8ejSwK-MylAzg",
  authDomain: "live-chat-d8cf3.firebaseapp.com",
  projectId: "live-chat-d8cf3",
  storageBucket: "live-chat-d8cf3.appspot.com",
  messagingSenderId: "910283332158",
  appId: "1:910283332158:web:e96c5f0161f6c7f2e24f6f",
  measurementId: "G-Z328F5ZZBH"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const projectFireStore = getFirestore(firebase);
const projectAuth = getAuth(firebase);
const timestamp = serverTimestamp(firebase)

export { projectAuth, projectFireStore , timestamp ,firebase }