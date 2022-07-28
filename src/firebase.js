// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdwco8xuOFKgnlwnqJioUPnE6fRm4675M",
  authDomain: "clone1-1363a.firebaseapp.com",
  projectId: "clone1-1363a",
  storageBucket: "clone1-1363a.appspot.com",
  messagingSenderId: "641436789627",
  appId: "1:641436789627:web:ad6711ec5ae63ba9baabde",
  measurementId: "G-SM83QGRD8E"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

  export {db,auth};