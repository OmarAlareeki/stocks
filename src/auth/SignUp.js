import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { useUserAuth } from "./UserAuthContent";
import Container from "@mui/material/Container";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <div className="p-4 box">
        <h1 className="header">Sign up</h1>

        {error && <span variant="danger">{error}</span>}

        <Box 
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            type="email"
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-grid gap-2">
            <Button variant="contained" type="Submit">
              Sign up
            </Button>
          </div>
        </Box>
      </div>
      <h3 className="header">
        Already have an account? <Link to="/login">Log In</Link>
      </h3>
    </Container>
  );
};

export default Signup;
