import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDic99_wX67gbx_0nWWJLp7QqGKUtkYBRg",
  authDomain: "alvaro-firegram.firebaseapp.com",
  databaseURL: "https://alvaro-firegram.firebaseio.com",
  projectId: "alvaro-firegram",
  storageBucket: "alvaro-firegram.appspot.com",
  messagingSenderId: "253897134196",
  appId: "1:253897134196:web:3380d999b39629176b0121"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };