import firebase from "firebase/app";
import "firebase/firestore"; // DB
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCIKNczPeyekO-yEOr4o4u4Rlv1w_QEAc0",
  authDomain: "crown-db-baa4b.firebaseapp.com",
  projectId: "crown-db-baa4b",
  storageBucket: "crown-db-baa4b.appspot.com",
  messagingSenderId: "105360073229",
  appId: "1:105360073229:web:ebfd24ecae74655faa6b44",
  measurementId: "G-BXEDY3RQMN",
};

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
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Select the gogle account popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
