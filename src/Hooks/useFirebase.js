import { firebaseInitialize } from "../Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
firebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //google sign in
  const goolgeSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.message);
      });
  };


  const userLogout=()=>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      })
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
  },[])

  //obserber
  return { user,userLogout,goolgeSignIn };
};

export { useFirebase };
