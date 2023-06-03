import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCpQIautHygFwIl5i4gLk6mxuzxdAWmpJ4",
  authDomain: "finicialtracker.firebaseapp.com",
  projectId: "finicialtracker",
  storageBucket: "finicialtracker.appspot.com",
  messagingSenderId: "308403349016",
  appId: "1:308403349016:web:dbc5afdba241566bf5856d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage()

export {db,storage, app}