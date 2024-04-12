import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import GoogleButton from "react-google-button";
import { useUserAuth } from "./UserAuthContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <div className="p-4 box">
        <h1 className="header">Login</h1>

        {error && <span variant="danger">{error}</span>}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            type="email"
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-grid gap-2">
            <Button variant="contained" type="Submit">
              Log In
            </Button>
          </div>

          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
          <h3 className="header">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </h3>
        </Box>
      </div>
    </Container>
  );
};

export default Login;
