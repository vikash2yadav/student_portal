import { Drawer, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "../styles/styleComponents";
import { useLocation } from "react-router-dom";
import {
  Group as GroupIcon,
  LibraryBooks as LibraryBooksIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

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
    <Stack width={"full"} direction={"column"} p={"3rem"} spacing={"3rem"}>
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
                    bgcolor: "white",
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Grid container minHeight={"100vh"}>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "flex", md: "none" }, // Only show on xs and sm screens
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Grid>

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

        <div open={isDrawerOpen} onClose={handleDrawerToggle}>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={!isDrawerOpen}
            sx={{
              width: 250,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 250,
                boxSizing: "border-box",
              },
            }}
          >
            <Stack
              width={"full"}
              direction={"column"}
              p={"2rem"}
              spacing={"2rem"}
            >
              <Typography variant="h5" textTransform={"uppercase"}>
                Modules
              </Typography>
              <Stack spacing={"1rem"}>
                {Tabs.map((i) => (
                  <Link
                    key={i.path}
                    to={i.path}
                    sx={
                      location.pathname === i.path && {
                        bgcolor: "black",
                        color: "white",
                        ":hover": {
                          color: "black",
                          bgcolor: "white",
                        },
                      }
                    }
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={"1rem"}
                    >
                      {i.icon}
                      <Typography fontSize={"1.2rem"}>{i.name}</Typography>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Drawer>
        </div>
      </Grid>
    </>
  );
};

export default Layout;
