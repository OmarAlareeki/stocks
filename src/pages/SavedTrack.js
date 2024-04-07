import { useState } from "react";
import SignOut from "../auth/SignOut";
import Login from "../auth/Login";
import { auth } from "../auth/auth";
import Container from "@mui/material/Container";

console.log(auth.currentUser);

const SavedTrack = () => {
  // const [user, setUser] = useState(auth.currentUser);

  return (
    <>
      <Container>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </Container>
    </>
  );
};

export default SavedTrack;
