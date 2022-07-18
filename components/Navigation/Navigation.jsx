import Router from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navigation = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href="/"
          >
            LHOIKTN PORTFOLIO
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Stack direction="row" spacing={2}></Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
