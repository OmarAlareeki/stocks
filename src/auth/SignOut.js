import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./auth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const SignOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <div style={{ margin: "10px" }}>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </nav>
    </>
  );
};

export default SignOut;
