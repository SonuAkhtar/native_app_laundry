import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCFAwBSBin1bpzRevIZpuiZ5U5mdxPxTs",
  authDomain: "native-laundry.firebaseapp.com",
  projectId: "native-laundry",
  storageBucket: "native-laundry.appspot.com",
  messagingSenderId: "260235079168",
  appId: "1:260235079168:web:4ca32e40f53c06f39232e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
