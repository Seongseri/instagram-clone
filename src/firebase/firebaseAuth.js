import firebase from "firebase";
import "firebase/auth";
import firebaseKey from "../config/firebaseKey.json";

firebase.initializeApp(firebaseKey);
export const auth = firebase.auth();

export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  console.log("signOut");
  return auth.signOut();
};
