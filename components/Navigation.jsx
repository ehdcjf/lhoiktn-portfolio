import Router from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
} from "@mui/material";
const Navigation = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "inline-flex",
            justifyContent: "space-between",

            marginLeft: 3,
            marginRight: 3,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href="/"
          >
            김동철 포트폴리오
          </IconButton>

          <Stack direction="row" spacing={2}>
            <Link href="#Info">
              <Typography variant="h6" color="white">
                Info
              </Typography>
            </Link>
            <Link href="#Skill">
              <Typography variant="h6" color="white">
                Skill
              </Typography>
            </Link>
            <Link href="#Certificate">
              <Typography variant="h6" color="white">
                Certificate
              </Typography>
            </Link>
            <Link href="#Archive">
              <Typography variant="h6" color="white">
                Archive
              </Typography>
            </Link>
            <Link href="#Education">
              <Typography variant="h6" color="white">
                Education
              </Typography>
            </Link>
            <Link href="#Career">
              <Typography variant="h6" color="white">
                Career
              </Typography>
            </Link>
            <Link href="#Project">
              <Typography variant="h6" color="white">
                Project
              </Typography>
            </Link>
            <Link href="#History">
              <Typography variant="h6" color="white">
                History
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
