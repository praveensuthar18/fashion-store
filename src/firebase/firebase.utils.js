import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBd2K8mymphBYayGFVc-hm3CDJB_jny-HQ",
  authDomain: "fashion-store-52dce.firebaseapp.com",
  projectId: "fashion-store-52dce",
  storageBucket: "fashion-store-52dce.appspot.com",
  messagingSenderId: "758710605581",
  appId: "1:758710605581:web:e51a592da51909ac1a4244",
  measurementId: "G-YM7BTW6H7W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
