import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Link as Rlink, useNavigate } from "react-router-dom";
import { UseUserAuth } from "../context/UserAuthContext"; //function in userAuthcontext
import Alert from "@mui/material/Alert";

// import Login from "./Login";

// // TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {   //func start

  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UseUserAuth();
  const navigate = useNavigate(); //to navigate afte events

  const handleSubmit = async (e) => {
    //submits form to firebase database

    e.preventDefault();
    setError(""); //init error is empty

    try {
      await signUp(email, passw);
      // providing email and password to firebase

      navigate("/Login"); //navigate to '/'



    } catch (err) {
      setError(err.code); //put error = err.message
    }
    // console.log(email, passw);
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {error && <Alert severity="error">error:{error}</Alert>}

          {/* form  start  */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassw(e.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <Box display="flex" flexDirection="row">
              {" "}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mr: 5, mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {" "}
                already have an account? <Rlink to="/Login"> log in </Rlink>
              </Button>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
          {/* form  end  */}
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
