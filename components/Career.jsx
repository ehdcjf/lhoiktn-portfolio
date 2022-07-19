import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";

import ComputerIcon from "@mui/icons-material/Computer";

import Typography from "@mui/material/Typography";
import careerImage001 from "../asset/images/career/citylabs.jpg";

const career = [
  {
    name: "(주)시티랩스",
    date: "2022.01~2022.06",
    image: careerImage001,
    task: [
      {
        name: "ERC-721, ERC-1155 기반 NFT 마켓플레이스 POC",
        role: [
          "프로젝트 리드",
          "BSC 테스트 네트워크 위에 ERC-721 기반의 스마트 컨트랙트 작성",
          "Node.js로 NFT 마켓 백엔드 개발",
          "추후 ERC-1155 기반의 스마트 컨트랙트 작성 및 백엔드 추가 개발 진행",
        ],
      },
      {
        name: "E3DA 관리자 페이지 정산/결제 백엔드 개발 및 관리자 백엔드 리팩토링",
        role: [
          "관리자 페이지 정산/결제 백엔드 개발",
          "인도 개발팀이 만든 API를 리팩토링",
        ],
      },
    ],
  },
];

const Career = () => {
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
      <Typography variant="h2" align="center" paddingTop={15} id="Career">
        경력
      </Typography>

      <Grid container paddingTop={5} spacing={10} width="100%">
        {career.map((c, l) => {
          return (
            <Grid item xs={12} key={c.name}>
              <Card variant="outlined">
                <Grid container width="100%">
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Image
                        key={c.name}
                        src={c.image}
                        alt={`${c.name}logo`}
                        width={500}
                        height={400}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="h4" align="center" marginBottom={3}>
                        {c.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        marginBottom={2}
                      >
                        {c.date}
                      </Typography>

                      {c.task.map((t) => {
                        return (
                          <Box key={t.name} marginBottom={2}>
                            <Typography
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                              variant="subtitle1"
                              align="left"
                            >
                              <ComputerIcon />
                              {t.name}
                            </Typography>
                            {t.role.map((tr) => {
                              return (
                                <Typography key={tr}>{"·  " + tr}</Typography>
                              );
                            })}
                          </Box>
                        );
                      })}
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Career;
