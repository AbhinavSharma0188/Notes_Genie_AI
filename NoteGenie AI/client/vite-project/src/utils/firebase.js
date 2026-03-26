
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY ,
  authDomain: "genainotes-3bf1f.firebaseapp.com",
  projectId: "genainotes-3bf1f",
  storageBucket: "genainotes-3bf1f.firebasestorage.app",
  messagingSenderId: "584252921863",
  appId: "1:584252921863:web:c5e5f3e6dad77ab4e672a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};