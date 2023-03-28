import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqhr3rNeM8BrGXS5vae5ZGuDvqDustdE0",
  authDomain: "medium-app-9809a.firebaseapp.com",
  projectId: "medium-app-9809a",
  storageBucket: "medium-app-9809a.appspot.com",
  messagingSenderId: "335772463584",
  appId: "1:335772463584:web:6a39a21335dc136f54bb85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Enable the google sign-in-method (Authentication)
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export { auth, provider };
