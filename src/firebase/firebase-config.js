// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhzEiUnczSav9Xz7vbW0Tg8mcAbjoqdBI",
  authDomain: "eats-food-clint.firebaseapp.com",
  projectId: "eats-food-clint",
  storageBucket: "eats-food-clint.appspot.com",
  messagingSenderId: "973344526571",
  appId: "1:973344526571:web:a473d7c9840e0db0f4aeae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;