import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwbxpNR5qRqbsCfMuacpNkQDBfQwb6nms",
  authDomain: "frontend-final-221de.firebaseapp.com",
  databaseURL: "https://frontend-final-221de-default-rtdb.firebaseio.com",
  projectId: "frontend-final-221de",
  storageBucket: "frontend-final-221de.appspot.com",
  messagingSenderId: "394236333185",
  appId: "1:394236333185:web:fdfa1426ee9ddb39b3d180",
  measurementId: "G-TFGCZSTMHX",
};

//Intialize firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
