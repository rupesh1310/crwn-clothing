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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
