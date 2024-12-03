import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Container, Paper, Stack, Typography } from "@mui/material";
import Appbar from "../../components/Layout/Appbar";
import { DoughnutChart } from "../../utils/chart";
import {
  NotInterested as NotInterestedIcon,
  EmojiEmotionsOutlined as EmojiEmotionsOutlinedIcon,
} from "@mui/icons-material";
import { StudentsContext } from "../../context/StudentContext";

const Home = () => {
  const { students, studentList } = useContext(StudentsContext);
  const [activeCount, setActiveCount] = useState(0);
  const [suspendedCount, setSuspendedCount] = useState(0);

  useEffect(() => {
    studentList();
  }, []);

  useEffect(() => {
    if (students && students.length > 0) {
      const active = students.filter(
        (student) => student.status === "Active"
      ).length;
      const suspended = students.filter(
        (student) => student.status === "Suspended"
      ).length;

      setActiveCount(active);
      setSuspendedCount(suspended);
    }
  }, [students]);

  return (
    <Layout>
      <Container component={"main"}>
        <Appbar title={"Dashboard"} />
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          sx={{ gap: "2rem" }}
        >
          {/* Student Status Doughnut Chart */}
          <Stack
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "50%" }, marginBottom: "2rem" }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Student Status Overview
            </Typography>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "28rem",
                width: "100%",
                maxWidth: "26rem",
              }}
            >
              <DoughnutChart
                labels={["Active Students", "Suspended Students"]}
                value={[activeCount, suspendedCount]}
              />
              <Stack
                position={"absolute"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"0.5rem"}
                width={"100%"}
                height={"100%"}
              >
                <EmojiEmotionsOutlinedIcon />
                <Typography>Vs</Typography>
                <NotInterestedIcon />
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Home;
