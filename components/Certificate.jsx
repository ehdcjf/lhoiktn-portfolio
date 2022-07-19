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
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        width: "100%",
        marginTop: "3vh",
      }}
    >
      <Typography variant="h2" align="center" paddingTop={15} id="Certificate">
        자격
      </Typography>

      <Grid container paddingX={5} paddingTop={5} spacing={5} width="100%">
        {certificate.map((c, l) => {
          return (
            <Grid item xs={4} key={c.name}>
              <Card>
                <CardHeader>{c.name}</CardHeader>
                <CardContent>
                  <Typography variant="h4" align="center">
                    {c.name}
                  </Typography>
                  <Typography variant="body1" align="center">
                    발급일자: {c.date}
                  </Typography>
                  <Typography variant="body1" align="center">
                    발급기관: {c.issuer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Certificate;
