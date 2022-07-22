import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const archive = [
  {
    name: "tistory",
    summary: "개발 관련 블로그",
    link: "https://lhoiktiv.tistory.com/",
    image: require("../asset/images/archieve/tistory.png"),
    content: [
      "개발 관련 공부한 것들 정리 및 치트시트 작성",
      "개발일기 작성",
      "백준 문제 풀이 작성",
    ],
  },
  {
    name: "GitHub",
    summary: "소스코드 저장소",
    image: require("../asset/images/skills/github.png"),
    link: "https://github.com/ehdcjf",
    content: ["프로젝트 소스코드", "코딩 연습을 위한 소스코드"],
  },
];

const Archive = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        width: "100%",
      }}
    >
      <Typography
        id="Archive"
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
        marginTop={{ xl: "20vh", lg: "20vh", md: "10vh" }}
        marginBottom="4vh"
      >
        보관소
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignContent="space-evenly"
        width="100%"
      >
        {archive.map((a, l) => {
          return (
            <Card key={a.name} sx={{ maxWidth: 600, marginBottom: 1 }}>
              <CardContent>
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
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  paddingBottom={3}
                >
                  <Image
                    key={a.image}
                    src={a.image}
                    alt={`${a.name} logo`}
                    width={70}
                    height={70}
                  />
                  {a.name}
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
                  paddingBottom={2}
                >
                  {a.summary}
                </Typography>
                <Typography
                  sx={{
                    typography: {
                      xl: "h4",
                      lg: "h5",
                      md: "h6",
                      sm: "body2",
                      sx: "body2",
                    },
                  }}
                  align="left"
                >
                  링크:{"  "}
                  <Link href={a.link} target="_blank">
                    {a.link}
                  </Link>
                </Typography>
                {a.content.map((con, ci) => {
                  return (
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
                      align="left"
                      key={con}
                    >
                      - {con}
                    </Typography>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Archive;
