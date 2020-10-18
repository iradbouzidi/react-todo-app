import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYaaHDm2-4_VtjHvdniEbQ0h4_NhJ3k30",
  authDomain: "todo-app-irad-51a26.firebaseapp.com",
  databaseURL: "https://todo-app-irad-51a26.firebaseio.com",
  projectId: "todo-app-irad-51a26",
  storageBucket: "todo-app-irad-51a26.appspot.com",
  messagingSenderId: "297689276271",
  appId: "1:297689276271:web:5e1c86ce8bf8255bb3529a",
  measurementId: "G-40GJ2G3G2Y",
});

const db = firebaseApp.firestore();

export default db;