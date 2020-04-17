import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBK26XkNGvMTlkc3DpeOA4pnm71Qw5FZfs",
    authDomain: "vue-shop-8ba4b.firebaseapp.com",
    databaseURL: "https://vue-shop-8ba4b.firebaseio.com",
    projectId: "vue-shop-8ba4b",
    storageBucket: "vue-shop-8ba4b.appspot.com",
    messagingSenderId: "968204491538",
    appId: "1:968204491538:web:038e9d53427f2382daf1cb",
    measurementId: "G-RG62VXH6M4"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}


