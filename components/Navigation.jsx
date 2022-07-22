import Router from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
  Box,
} from "@mui/material";

const Navigation = () => {
  return (
    <Box
      position="sticky"
      bgcolor="#885D24"
      width="100vw"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      paddingX="2vw"
    >
      <Link href="#" padding={1} underline="none">
        <Typography
          sx={{
            typography: {
              xl: "h4",
              lg: "h5",
              md: "h6",
              sm: "body1",
              sx: "body2",
            },
          }}
          color="white"
        >
          김동철 포트폴리오
        </Typography>
      </Link>

      <Stack direction="row" flexWrap="wrap" display="flex" alignItems="center">
        <Link href="#" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Info
          </Typography>
        </Link>
        <Link href="#Skill" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Skill
          </Typography>
        </Link>
        <Link href="#Certificate" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Certificate
          </Typography>
        </Link>
        <Link href="#Archive" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Archive
          </Typography>
        </Link>
        <Link href="#Education" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Education
          </Typography>
        </Link>
        <Link href="#Career" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Career
          </Typography>
        </Link>
        <Link href="#Project" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            Project
          </Typography>
        </Link>
        <Link href="#History" padding={1} underline="none">
          <Typography
            sx={{
              typography: {
                xl: "h5",
                lg: "h6",
                md: "h6",
                sm: "body1",
                sx: "body2",
              },
            }}
            color="white"
          >
            History
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
};

export default Navigation;
