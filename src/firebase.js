import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUis3zUK_HESQN0fgk1haBnv4PfxZO8xo",
    authDomain: "todo-app-irad.firebaseapp.com",
    databaseURL: "https://todo-app-irad.firebaseio.com",
    projectId: "todo-app-irad",
    storageBucket: "todo-app-irad.appspot.com",
    messagingSenderId: "182512480774",
    appId: "1:182512480774:web:632273a09f9d74a5a64987",
    measurementId: "G-89FE99C1Y3"
});

const db = firebaseApp.firestore();

export default db;