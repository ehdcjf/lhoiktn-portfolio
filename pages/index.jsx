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
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Grid container padding="2vw" width="100vw">
        <Grid item xs={12} marginBottom={10}>
          <Info />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Skills />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Certificate />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Archive />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Education />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Career />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <Project />
        </Grid>
        <Grid item xs={12} marginBottom={10}>
          <History />
        </Grid>
        <Grid item xs={12} marginBottom={10}></Grid>
      </Grid>
    </>
  );
}
