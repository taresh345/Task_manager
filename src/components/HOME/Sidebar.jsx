import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, TextField } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { UseUserAuth } from "../../context/UserAuthContext"; //function in userAuthcontext
import { Link, Navigate } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const { LogOut } = UseUserAuth();

  const handleLogOut = async () => {
    try {
      await LogOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#fffff2", //changes the bg of sidebar
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ pt: "200px" }} />
        {/* <Divider   /> */}
        <List>
          {["DASHBOARD", "Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                   <Link to='/AddTaskForm'> <InboxIcon /></Link>
                     
                  ) : (
                    <IconButton size="large" onClick={handleLogOut}>
                      <LogoutIcon fontSize="inherit" />
                    </IconButton>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
