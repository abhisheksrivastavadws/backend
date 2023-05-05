import firebase from "firebase"



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0XuqIm6icI55rX-XXgEq21DcB8r_kXlo",
  authDomain: "myprojectroy.firebaseapp.com",
  databaseURL: "https://myprojectroy-default-rtdb.firebaseio.com",
  projectId: "myprojectroy",
  storageBucket: "myprojectroy.appspot.com",
  messagingSenderId: "127591082623",
  appId: "1:127591082623:web:7c15da1a75d3e749526d4a",
  measurementId: "G-PTJ3C0K1X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyC0XuqIm6icI55rX-XXgEq21DcB8r_kXlo",
//     authDomain: "myprojectroy.firebaseapp.com",
//     projectId: "myprojectroy",
//     storageBucket: "myprojectroy.appspot.com",  
//     messagingSenderId: "127591082623",
//    appId: "1:127591082623:web:f138ea40a6699625526d4a",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// // export Firebase so it can be used elsewhere 
//  const FireBase = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app
// export default Firebase;