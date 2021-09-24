import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_1r8inSuWDv5PYLiAQz662Vzzkq_oC7Q",
  authDomain: "mirorup-819c9.firebaseapp.com",
  databaseURL: "https://mirorup-819c9-default-rtdb.firebaseio.com",
  projectId: "mirorup-819c9",
  storageBucket: "mirorup-819c9.appspot.com",
  messagingSenderId: "163085149257",
  appId: "1:163085149257:web:7aac58ac31d0c92c5e0b98",
  measurementId: "G-FS1YCFVTWC",
};

// firebase.app.length === 0
// : firebase.app();
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
