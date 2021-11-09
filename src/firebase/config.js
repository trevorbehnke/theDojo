import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvaAs567x-RQzOOfFaxKr50aJjCEJ99ts",
  authDomain: "thedojo-61e9c.firebaseapp.com",
  projectId: "thedojo-61e9c",
  storageBucket: "thedojo-61e9c.appspot.com",
  messagingSenderId: "84242778053",
  appId: "1:84242778053:web:ec1391ddc714918bcbedac",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
