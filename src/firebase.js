// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyD9VIyKGOX3NvRhrPpR4qqH4moVZL-t0CI",
    authDomain: "clone-2b9ee.firebaseapp.com",
    projectId: "clone-2b9ee",
    storageBucket: "clone-2b9ee.appspot.com",
    messagingSenderId: "931941776790",
    appId: "1:931941776790:web:7d24177450e5628a8cf1b7",
    measurementId: "G-5QSXEWXY6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

  export {db,auth};