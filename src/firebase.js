import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYolWgPTLsd5yMKlpuHQ8bKoYUTDdCUZ4",
  authDomain: "react-netflix-clone-860e1.firebaseapp.com",
  projectId: "react-netflix-clone-860e1",
  storageBucket: "react-netflix-clone-860e1.appspot.com",
  messagingSenderId: "196772853590",
  appId: "1:196772853590:web:113b48077434bc457208f7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
