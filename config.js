import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBQiueXOijrPsTpicuvNNEAnKmE6dzO9Fg",
    authDomain: "willy-app-4fb58.firebaseapp.com",
    databaseURL: "https://willy-app-4fb58.firebaseio.com",
    projectId: "willy-app-4fb58",
    storageBucket: "willy-app-4fb58.appspot.com",
    messagingSenderId: "34643714038",
    appId: "1:34643714038:web:972422522e25bf5f6731d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()