// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-59d55.firebaseapp.com',
  projectId: 'mern-blog-59d55',
  storageBucket: 'mern-blog-59d55.appspot.com',
  messagingSenderId: '133184076996',
  appId: '1:133184076996:web:a18e09e82578ff4dbc1d91',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
