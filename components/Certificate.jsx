import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

import Typography from "@mui/material/Typography";

const certificate = [
  { date: "2020.11", name: "정보처리기사", issuer: "한국산업인력공단" },
  { date: "2021.02", name: "중등학교 정교사(2급) 기술", issuer: "교육부" },
  {
    date: "2021.02",
    name: "중등학교 정교사(2급) 정보·컴퓨터",
    issuer: "교육부",
  },
];

const Certificate = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.paper",
        borderRadius: 1,
        padding: "1vh",
        width: "100%",
      }}
    >
      <Typography
        align="center"
        sx={{
          typography: {
            xl: "h2",
            lg: "h2",
            md: "h3",
            sm: "h3",
            sx: "h4",
          },
        }}
        marginTop={{ xl: "20vh", lg: "20vh", md: "10vh" }}
        marginBottom="4vh"
        id="Certificate"
      >
        자격
      </Typography>

      <Grid container>
        {certificate.map((c, l) => {
          return (
            <Grid
              item
              xs={12}
              key={c.name}
              sx={{
                border: "1px solid #aaa",
                borderRadius: 1,
                padding: 1,
                marginBottom: 1,
              }}
            >
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
                gutterBottom
                align="left"
              >
                {c.name}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xl: "h6",
                    lg: "h6",
                    md: "h6",
                    sm: "h6",
                    sx: "h6",
                  },
                }}
                gutterBottom
                align="left"
              >
                발급일자: {c.date}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xl: "h6",
                    lg: "h6",
                    md: "h6",
                    sm: "h6",
                    sx: "h6",
                  },
                }}
                gutterBottom
                align="left"
              >
                발급기관: {c.issuer}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Certificate;
