import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  const drawerWidth = 240;

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "#e5e5d9",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap component="div" 
        color="#1e2021">
          Task Manager App
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
