import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtD7f5P4pKeghEc5dufqlaSwB4rwrGth8",
  authDomain: "manish-pomodoro.firebaseapp.com",
  projectId: "manish-pomodoro",
  storageBucket: "manish-pomodoro.appspot.com",
  messagingSenderId: "344549289789",
  appId: "1:344549289789:web:f0f76dae8b1bb3e50d5f54",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
