import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";

import ComputerIcon from "@mui/icons-material/Computer";

import Typography from "@mui/material/Typography";
const careerImage001 = "../asset/images/career/citylabs.jpg";

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
        role: ["관리자 페이지 정산/결제 백엔드 개발"],
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
        id="Career"
      >
        경력
      </Typography>

      {career.map((c, l) => {
        return (
          <Card variant="outlined" key={c.name}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                sx={{ minHeight: 100, maxHeight: 800 }}
                component="img"
                image={c.image}
                alt="프로젝트 이미지"
              />
            </Box>
            <CardContent>
              <Typography
                sx={{
                  typography: {
                    xl: "h2",
                    lg: "h2",
                    md: "h3",
                    sm: "h3",
                    sx: "h4",
                  },
                }}
                align="center"
                marginBottom={3}
              >
                {c.name}
              </Typography>
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
                        // display: "flex",
                        // alignItems: "center",
                        // flexWrap: "wrap",
                        typography: {
                          xl: "h4",
                          lg: "h5",
                          md: "h6",
                          sm: "body1",
                          sx: "body2",
                        },
                      }}
                      align="left"
                    >
                      {t.name}
                    </Typography>
                    {t.role.map((tr) => {
                      return <Typography key={tr}>{"·  " + tr}</Typography>;
                    })}
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Career;
