import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDOcAVqfjyLG64CEQLrHsfAwYiINrj6sVc",
    authDomain: "pickup-ffc49.firebaseapp.com",
    databaseURL: "https://pickup-ffc49.firebaseio.com",
    projectId: "pickup-ffc49",
    storageBucket: "",
    messagingSenderId: "66485522931"
  };
  
  let app = firebase.initializeApp(config)
  export const db = app.database()