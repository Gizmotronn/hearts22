import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD1AXFX1_BsoeI_M11TOfHDOcJVIpTGYyY",
  authDomain: "melbourneheart2122.firebaseapp.com",
  projectId: "melbourneheart2122",
  storageBucket: "melbourneheart2122.appspot.com",
  messagingSenderId: "232123800073",
  appId: "1:232123800073:web:d9f5a2b1ab2e9d8315f6d8",
  measurementId: "G-9YFN9F245G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };