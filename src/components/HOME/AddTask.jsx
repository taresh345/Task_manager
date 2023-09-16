// import React from "react";
import { addDoc } from "firebase/firestore";

import { newTaskRef } from "../../config/firebase";
import { UseUserAuth } from "../../context/UserAuthContext"; //function in userAuthcontext

import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AddTask() {
  const { user } = UseUserAuth(); //current user
  const [task, setTask] = useState(""); //task name
  const [taskDetails, setTaskDetails] = useState("");
  const [date, setDate] = useState("");
  //   const [assign, setAssign] = useState("");   //assign users

  const navigate = useNavigate(); //usenavigate hook for redirection



  const AddT = async () => {
    //Function to add dask to firebase  database
    try {
      const docRef = await addDoc(newTaskRef, {
        email: user.email,
        userId: user.uid,
        Task: task,
        TaskDetails: taskDetails,
        dueDate: date,
      });

      console.log("Document written with ID: ", docRef);

      return navigate("/Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{ marginRight: "15%", marginLeft: "10%", bgcolor: "#e5e5d9" }}
      >
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Add a Task
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Task name
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Task details
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label=" Task details"
                multiline
                fullWidth
                rows={4}
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Due-date <br />
                (dd-mm-yy)
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="Due-date"
                name="Due-date"
                label="Due-date"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Assign To
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Users"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                // value ={assign}   //todo
              />
            </Grid>

            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                sx={{
                  color: "#ff781f",

                  bgcolor: "#fffff2",
                }}
                onClick={AddT}
              >
                Add task
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
