import Navigation from "../components/Navigation";
import Grid from "@mui/material/Grid";
const DefaultLayout = ({ children }) => {
  return (
    <Grid container width={"100vw"}>
      <Grid item xs={12}>
        <Navigation />
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
