import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3THciI2p6LVnPHP28YPdT4AgI5KfmCnI",
    authDomain: "react-facebook-clone-app.firebaseapp.com",
    projectId: "react-facebook-clone-app",
    storageBucket: "react-facebook-clone-app.appspot.com",
    messagingSenderId: "1075912660968",
    appId: "1:1075912660968:web:53a8cf6c9134f509f0f65d",
    measurementId: "G-PE7H21P1VN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;