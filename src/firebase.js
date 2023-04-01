import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyBsRDd97BFyEGfSVz1i3o4V5BFqjI-9tW4",
    authDomain: "messenger-facebook-efdc2.firebaseapp.com",
    projectId: "messenger-facebook-efdc2",
    storageBucket: "messenger-facebook-efdc2.appspot.com",
    messagingSenderId: "262917267046",
    appId: "1:262917267046:web:9116e8ddef96e4699017a7",
    measurementId: "G-BLTGQSPVJY"
      
})
const db = firebaseApp.firestore();

export default db ;

