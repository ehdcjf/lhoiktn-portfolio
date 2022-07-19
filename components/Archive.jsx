import Grid from "@mui/material/Grid";
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
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        width: "100%",
        marginTop: "3vh",
      }}
    >
      <Typography id="Archive" variant="h2" align="center" paddingTop={15}>
        보관소
      </Typography>

      <Grid container paddingX={5} paddingTop={5} spacing={5} width="100%">
        {archive.map((a, l) => {
          return (
            <Grid item xs={6} key={a.name}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h4"
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
                  <Typography variant="h6" align="center" paddingBottom={2}>
                    {a.summary}
                  </Typography>
                  <Typography variant="h6" align="center">
                    링크:{"  "}
                    <Link href={a.link} target="_blank">
                      {a.link}
                    </Link>
                  </Typography>
                  {a.content.map((con, ci) => {
                    return (
                      <Typography variant="body1" align="center" key={con}>
                        {con}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Archive;
