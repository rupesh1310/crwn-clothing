import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2Yx02FxInpT3ClbubXkCPqfll8wYh1j8",
  authDomain: "crwn-db-844e0.firebaseapp.com",
  databaseURL: "https://crwn-db-844e0.firebaseio.com",
  projectId: "crwn-db-844e0",
  storageBucket: "crwn-db-844e0.appspot.com",
  messagingSenderId: "900856777187",
  appId: "1:900856777187:web:4b1e2cb5ffc4d467ddf8d6",
  measurementId: "G-P0293DM8T3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
