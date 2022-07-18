import Image from "next/image";
import DefaultLayout from "../layout/DefaultLayout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hero from "../asset/images/hero/profile-img4.jpeg";
import Way from "../components/Way";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
import Info from "../components/Info";
import Archive from "../components/Archive";
import Project from "../components/Project";
import History from "../components/History";

export default function Home() {
  return (
    <DefaultLayout>
      <Box padding={10}>
        <Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Info />
            <Skills />
            <Certificate />
            <Archive />
            <Project />
            {/* <Way /> */}
            <History />
          </Box>
        </Stack>
      </Box>
    </DefaultLayout>
  );
}
