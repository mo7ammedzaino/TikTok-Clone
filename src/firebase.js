import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIdvOlAtrNAr8B1DT6pUTkDNDFrdFdWks",
  authDomain: "tik-tok-clone-e8808.firebaseapp.com",
  projectId: "tik-tok-clone-e8808",
  storageBucket: "tik-tok-clone-e8808.appspot.com",
  messagingSenderId: "879122916105",
  appId: "1:879122916105:web:da8941d0f39646f312e9d8",
  measurementId: "G-07VS89Z3Q4",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const videosRef = collection(db, "videos");
