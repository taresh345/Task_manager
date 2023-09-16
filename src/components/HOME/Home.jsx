import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
// import { UseUserAuth } from "../../context/UserAuthContext"; //function in userAuthcontext
import { Box, Stack, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/system/Unstable_Grid";

// ______components_________________

import Sidebar from "./Sidebar";
import HeroMain from "./HeroMain";
import AllUsers from "./AllUsers";
import NavBar from "./NavBar";

const Home = () => {
  // const { LogOut } = UseUserAuth();

  // const handleLogOut = async () => {
  //   try {
  //     await LogOut();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#e5e5d9",
          height: "100%",
          width: "100vw",
          pl: 1,
          pt: 1,
          flexWrap: "wrap",
        }}
      >
        <Grid container spacing={2}>
          <Grid lg={1.9}>
            <Box
              sx={{
                bgcolor: "#e5e5d9",

                height: "100vh",
              }}
            >
              <Sidebar /> {/* 1st component */}
            </Box>{" "}
          </Grid>

          <Grid lg={8}>
            <Stack spacing={10}>
              {" "}
              <Box>
                <NavBar />
              </Box>
              <Box
                sx={{
                  // bgcolor: "#fffff2",
                  // mt:7,
                  pl: { lg: 8, md: 0 },
                  width: "100%",
                  height: "100vh",
                }}
              >
                <HeroMain /> {/* 2nd component  / main app window*/}
              </Box>
            </Stack>
          </Grid>

        </Grid>
        {/* end of global grid  */}
      </Box>
      {/* end of global box  */}
    </>
  );
};

export default Home;
