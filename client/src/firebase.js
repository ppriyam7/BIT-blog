// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bit-blog-fbf25.firebaseapp.com",
  projectId: "bit-blog-fbf25",
  storageBucket: "bit-blog-fbf25.appspot.com",
  messagingSenderId: "485046354174",
  appId: "1:485046354174:web:ac73378a160c8e13fd25af",
  measurementId: "G-7RER2GWP34",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
