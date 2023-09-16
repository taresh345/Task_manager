import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, newTaskRef } from "../../config/firebase"; //task collection reference

// eslint-disable-next-line react/prop-types
const TaskList = ({ item }) => {
  const [Edit, setEdit] = useState(false);
  const [show, setShow] = useState(true);
  const [newTask, setNewTask] = useState("");

  //update task from firebase
  const updateTask = async (id, newTask) => {
    const userDoc = doc(db, "Tasks", id);

    const newFields = { Task: newTask };

    await updateDoc(userDoc, newFields);

    setShow(true);
    setEdit(false);
  };

  // delete document from firebase
  const deleteTask = async (id) => {
    const userDoc = doc(db, "Tasks", id);

    await deleteDoc(userDoc);

    // setShow(true);
    // setEdit(false);
  };

  // rereview
  return (
    // <Box
    //   sx={{
    //     display: "inline-flex",

    //     flexWrap: "wrap",
    //   }}
    // >

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        flexWrap: "wrap",
      }}
    >
      <List
        sx={{
          width: { lg: 400, sm: 300 },
          mt: 4,
          pl: 4,
          height: { lg: 50 },
          bgcolor: "#0005",
          borderRadius: 3,
        }}
      >
        <ListItem disablePadding>
          {show && <ListItemText primary={item.Task} />}

          <IconButton
            aria-label="delete"
            sx={{
              //edit button
              mr: 4,
            }}
            onClick={() => {
              setEdit(!Edit);
              setShow(!show);
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            sx={{
              //delete button
              mr: 4,
            }}
            onClick={() => {deleteTask(item.firebaseid)}}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>

      {/* on ressing the edit button  */}
      {Edit && (
        <>
          <TextField
            sx={{
              width: { lg: 400, sm: 300 },
              mt: 2,
              height: { lg: 50 },
            }}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></TextField>
          <Button
            variant="outlined"
            sx={{
              width: 70,
              mt: 3,
              ml: 1,
              height: { lg: 30 },
            }}
            onClick={() => updateTask(item.firebaseid, newTask)}
          >
            Done
          </Button>
        </>
      )}
    </Box>
  );
};

export default TaskList;
