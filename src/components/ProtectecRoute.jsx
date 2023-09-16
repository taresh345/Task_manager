import React from "react";
import { Navigate } from "react-router-dom";
import { UseUserAuth } from "../context/UserAuthContext"; //function in userAuthcontext

const ProtectecRoute = ({ children }) => {
  const { user } = UseUserAuth();

  if (user===null) {
    return <Navigate to="/Login" />; //if user is not there , route back to sign in
  }

  return children; //if user is there ,return children ? (home)
};

export default ProtectecRoute;
