import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Link as RLink, useNavigate } from "react-router-dom";
import { UseUserAuth } from "../context/UserAuthContext"; //function in userAuthcontext

// // TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [error, setError] = useState("");
  const { LogIn, resetPassword } = UseUserAuth();
  const navigate = useNavigate(); //to navigate afte events

  const handleSubmit = async (e) => {
    //submits form to firebase database

    e.preventDefault();
    setError(""); //init error is empty
    

    try {
      await LogIn(email, passw);
      // providing email and password to firebase

      navigate("/Home"); //navigate to '/'
    } catch (err) {
      setError(err.code); //put error = err.message
    }
    // console.log(email, passw);
  };

  const resetPass = async () => {
    //reset password function
    try {
      resetPassword(email);
      console.log(`reset password has been sent to :${email}`);
    } catch (err) {
      console.log(err.message);
    }
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
            Sign IN
          </Typography>

          {error && <Alert severity="error">Error:{error}</Alert>}

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
                // onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Dont have an account <RLink to="/">Sign up</RLink>
              </Button>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={resetPass}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
