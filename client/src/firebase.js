// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB811aH6sOQyfwH43WuXmbxKnRddoESIDQ",
//   apiKey:import.meta.env.FIRE,
  authDomain: "social-mern-3ae95.firebaseapp.com",
  projectId: "social-mern-3ae95",
  storageBucket: "social-mern-3ae95.appspot.com",
  messagingSenderId: "305568445135",
  appId: "1:305568445135:web:1daab00ba1511fa8fc7dba",
  measurementId: "G-NBH1Q5TX69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);