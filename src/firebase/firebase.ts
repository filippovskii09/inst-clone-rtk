// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4cZTNUygMdssEgQGBKbYnuHOsOkyF2TU',
  authDomain: 'inst-clone-rtk-2d68f.firebaseapp.com',
  projectId: 'inst-clone-rtk-2d68f',
  storageBucket: 'inst-clone-rtk-2d68f.appspot.com',
  messagingSenderId: '112603531548',
  appId: '1:112603531548:web:8dd1eb584ac641755e12d9',
  measurementId: 'G-RDLPNSSP41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig),
  auth = getAuth(app),
  db = getFirestore(app),
  storage = getStorage(app);

export { app, auth, db, storage };
