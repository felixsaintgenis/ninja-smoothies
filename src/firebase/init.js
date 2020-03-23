import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBiC2skzr1l7aH_lEYVpACZnK1uGFd0JmE",
  authDomain: "ninja-smoothies-a623c.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-a623c.firebaseio.com",
  projectId: "ninja-smoothies-a623c",
  storageBucket: "ninja-smoothies-a623c.appspot.com",
  messagingSenderId: "800284156101",
  appId: "1:800284156101:web:1669127e887c5a0df050ac"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export firestore database
export default firebaseApp.firestore();
