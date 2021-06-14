import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBI0og37fvCZwCvhe5sET8e4S5Vjj70ghY",
    authDomain: "book-reviews-a9b02.firebaseapp.com",
    databaseURL: "https://book-reviews-a9b02-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "book-reviews-a9b02",
    storageBucket: "book-reviews-a9b02.appspot.com",
    messagingSenderId: "414084221909",
    appId: "1:414084221909:web:a853a1e42d652e5e69cb5c"
};

export const app = firebase.initializeApp(firebaseConfig);
