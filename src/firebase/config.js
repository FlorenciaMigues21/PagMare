import firebase from "firebase/compat";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYvyU7aI4k4Ygnx9SWuUHXr2KbXJ0phnM",
    authDomain: "mare-multimarcas.firebaseapp.com",
    databaseURL: "https://mare-multimarcas-default-rtdb.firebaseio.com",
    projectId: "mare-multimarcas",
    storageBucket: "mare-multimarcas.appspot.com",
    messagingSenderId: "852147194263",
    appId: "1:852147194263:web:37338d785b6b64dc8a9cd2",
    measurementId: "G-TQ47GT8HG1"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
