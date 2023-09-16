import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddTask from "./components/HOME/AddTask";
import Typography from "@mui/material/Typography";
import "./App.css";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HOME/Home";
import ProtectecRoute from "./components/ProtectecRoute";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Home"
            element={
              <ProtectecRoute>
                {" "}
                <Home />
              </ProtectecRoute>
            }
          />

          <Route path="/AddTaskForm" element={<AddTask />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
