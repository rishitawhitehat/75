import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
 
    apiKey: "AIzaSyB_8eAzbbFgMYqNUzgV2rXQhGj39FDJ4P0",
    authDomain: "e--riding.firebaseapp.com",
    projectId: "e--riding",
    storageBucket: "e--riding.appspot.com",
    messagingSenderId: "830924917984",
    appId: "1:830924917984:web:d69ea87e1bd7d90b9ed485"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
