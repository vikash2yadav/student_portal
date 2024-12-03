import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import moment from "moment";

const Appbar = ({title}) => {
  return (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <Typography variant="h5">{title ? title : "Student Portal"}</Typography>

        <Box flexGrow={1}></Box>
        <Typography
          display={{ xs: "none", lg: "block" }}
          color="rgba(0,0,0,0.7)"
          textAlign={"center"}
        >
          {" "}
          {moment().format("MMMM Do YYYY")}{" "}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );
};

export default Appbar;
