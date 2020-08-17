import firebase from "firebase";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCj46kMR69JBeQYaz0J7-qyd0Mj-gRzRI",
  authDomain: "fir-web-aeea5.firebaseapp.com",
  databaseURL: "https://fir-web-aeea5.firebaseio.com",
  projectId: "fir-web-aeea5",
  storageBucket: "fir-web-aeea5.appspot.com",
  messagingSenderId: "1031914240172",
  appId: "1:1031914240172:web:69419cd87cc3d9173a0709",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
