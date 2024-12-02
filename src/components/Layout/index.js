import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "../styles/styleComponents";
import { useLocation } from "react-router-dom";
import { Group as GroupIcon, LibraryBooks as LibraryBooksIcon, Dashboard as DashboardIcon } from "@mui/icons-material";

const Tabs = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Students",
    path: "/student",
    icon: <GroupIcon />,
  },
  {
    name: "Subjects",
    path: "/subject",
    icon: <LibraryBooksIcon />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Stack width={'full'} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        Modules
      </Typography>

      <Stack spacing={"1rem"}>
        {Tabs.map((i) => (
          <>
            <Link
              key={i.path}
              to={i.path}
              sx={
                location.pathname === i.path && {
                  bgcolor: "black",
                  color: "white",
                  ":hover": {
                    color: "black",
                    bgcolor: 'white'
                  },
                }
              }
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {i.icon}
                <Typography fontSize={"1.2rem"}>{i.name}</Typography>
              </Stack>
            </Link>
          </>
        ))}
      </Stack>
    </Stack>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Grid container minHeight={"100vh"}>

        {/* <Sidebar /> */}
        <Grid
          item
          md={4}
          lg={3}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "rgba(0,0,0,0.1)" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
