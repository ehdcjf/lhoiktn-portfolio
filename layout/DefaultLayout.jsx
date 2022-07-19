import Navigation from "../components/Navigation";
import Box from "@mui/material/Box";
const DefaultLayout = ({ children }) => {
  return (
    <Box margin={0} padding={0}>
      <Navigation />
      {children}
    </Box>
  );
};

export default DefaultLayout;
