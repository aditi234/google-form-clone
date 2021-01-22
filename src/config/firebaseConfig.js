import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCiwQMEOEH_xS6UIr5REhIxEEeJdzksX0U",
  authDomain: "form-ae28a.firebaseapp.com",
  projectId: "form-ae28a",
  storageBucket: "form-ae28a.appspot.com",
  messagingSenderId: "518808253845",
  appId: "1:518808253845:web:536685d3c88d55c5f1b29c",
  measurementId: "G-440QL6H1HZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
