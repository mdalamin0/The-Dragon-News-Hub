// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtupyqqUespg_NZO1d3fNbJPF1WrOd4FE",
  authDomain: "the-dragon-news-hub.firebaseapp.com",
  projectId: "the-dragon-news-hub",
  storageBucket: "the-dragon-news-hub.firebasestorage.app",
  messagingSenderId: "65604291477",
  appId: "1:65604291477:web:0c95bb797546c59364c49c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);