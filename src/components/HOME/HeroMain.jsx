import {
  Box,
  // Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { UseUserAuth } from "../../context/UserAuthContext"; //function in userAuthcontext
import { Link } from "react-router-dom";

// firebase functions
import { onSnapshot, query, where } from "firebase/firestore";
import { newTaskRef } from "../../config/firebase"; //task collection reference
import TaskList from "./TaskList";
//function in userAuthcontext

const HeroMain = () => {
  //main function start
  const { user } = UseUserAuth(); //current user

  const [todoList, setTodoList] = useState([]);

  //create in firebase
  
  // read from firebase
  useEffect(() => {
    // if (user && user.uid) {
    // if user and user.uid exists

    const q= query(newTaskRef,where("userId", "==",String(user.uid)));
    // , where("userId", "==", user.uid)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let resultTasks = [];

      querySnapshot.forEach((doc) => {
        resultTasks.push({
          ...doc.data(),
          firebaseid: doc.id,   //unique id of the document
        });
      });
      resultTasks && setTodoList(resultTasks);
    });

    return () => unsubscribe();
    // }
  }, [user]);

  return (
    <>
      <Box
        boxSizing="border-box"
        sx={{
          width: { lg: 700, sm: 400 },
          height: { lg: 200 },
          bgcolor: "#0002",
          borderRadius: 3,
        }}
      >
        <Stack spacing={1} p="20px">
          <Typography variant="h5" pl="10px">
            Add Task
          </Typography>
          {/* <TextField
          id="outlined-basic"
          label="Text here"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}        // set the value insiide textfield to 'task' variable
        /> */}

          <Box
            sx={{
              width: 100,
            }}
          >
            <Link to="/AddTaskForm">       
              <IconButton      //redirects to AddTask page
                size="large"
                sx={{
                  ml: "20px",
                }}
                // onClick={fetchTask} //read  firestore  database
              >
                <AddIcon fontSize="inherit" color="#fff" />
              </IconButton>{" "}
            </Link>
          </Box>
        </Stack>
      </Box>

      { todoList.map((item, index) => (
        <TaskList item={item} key={index} />
      ))}
    </>
  );
};

export default HeroMain;
