import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtNwAIie_7MrrLmL4JkMX-7YZB3IzXEKU",
  authDomain: "whatapp-clone-a1812.firebaseapp.com",
  projectId: "whatapp-clone-a1812",
  storageBucket: "whatapp-clone-a1812.appspot.com",
  messagingSenderId: "358824545963",
  appId: "1:358824545963:web:9a008b19ae5ec58a9e71ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)