import DefaultLayout from "../layout/DefaultLayout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
import Info from "../components/Info";
import Archive from "../components/Archive";
import Project from "../components/Project";
import History from "../components/History";
import Career from "../components/Career";
import Education from "../components/Education";

export default function Home() {
  return (
    <DefaultLayout>
      <Box padding={10} margin={0}>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Info />
          <Skills />
          <Certificate />
          <Archive />
          <Education />
          <Career />
          <Project />
          <History />
        </Stack>
      </Box>
    </DefaultLayout>
  );
}
