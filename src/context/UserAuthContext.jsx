import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  

} from "firebase/auth";

import { auth } from "../config/firebase";

const userAuthContext = createContext({}); // share the user authentication to SignUp and Login components

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, passw) {
    // creates/stores email and password in databse

    try {
      return createUserWithEmailAndPassword(auth, email, passw);

      // providing email and password to firebase
    } catch (err) {
      return err;
    }
  }





  // function two -Login if signed up

  function LogIn(email, passw) {
    try {
      return signInWithEmailAndPassword(auth, email, passw);
    } catch (err) {
      return err;
    }

    // prviding email and password to firebase
  }
  function LogOut() {
    //signout for user
    return signOut(auth);

    // providing email and password to firebase
  }

  function resetPassword(email) {
    //sends a email  to user emailto reset your password
    try {
      return sendPasswordResetEmail(auth, email);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      //returns wether the user is logged in or not
    });
    return () => {
      unsubscribe(); //cleanup to prevent memeory leaks and abort errors
    };
  }, []);





  return (
    <userAuthContext.Provider
      value={{ user, signUp, LogIn, LogOut, resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

//custom hook
export function UseUserAuth() {
  return useContext(userAuthContext);
}
