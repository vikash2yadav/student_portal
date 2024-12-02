import React from "react";
import Layout from "../../components/Layout";
import { Container, Paper, Stack, Typography } from "@mui/material";
import Appbar from "../../components/Layout/Appbar";
import { DoughnutChart } from "../../utils/chart";
import {
  NotInterested as NotInterestedIcon,
  EmojiEmotionsOutlined as EmojiEmotionsOutlinedIcon,
} from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <Layout>
        <Container component={"main"}>
          <Appbar title={"Students"} />
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
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", sm: "50%" },
                position: "relative",
                maxWidth: "26rem",
                height: "28rem",
                marginBottom: "1rem",
              }}
            >
              <DoughnutChart
                labels={["Active Students", "Inactive Students"]}
                value={[2, 22]}
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
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", sm: "50%" },
                position: "relative",
                maxWidth: "26rem",
                height: "28rem",
                marginBottom: "1rem",
              }}
            >
              <DoughnutChart
                labels={["Active Subject", "Inactive Subjects"]}
                value={[5, 32]}
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
        </Container>
      </Layout>
    </>
  );
};

export default Home;
