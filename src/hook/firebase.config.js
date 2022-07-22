// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//BDD
import { getFirestore } from "firebase/firestore";
//Auth
import { getAuth} from "firebase/auth";
//cloud storage
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKhcN5ZZe6jMnSKGYiZFZz2iBvWv4fLg",
  authDomain: "curriculumaldara.firebaseapp.com",
  projectId: "curriculumaldara",
  storageBucket: "curriculumaldara.appspot.com",
  messagingSenderId: "6308859932",
  appId: "1:6308859932:web:6dee7165310733adb7cfd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

const db = getFirestore(app);

export const auth = getAuth();

export default db;

