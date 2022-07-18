import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const way = [
  { date: "2010.03 ~ 2013.02", name: "배명고등학교" },
  { date: "2013.03 ~ 2013.11", name: "방황 및 노가다" },
  { date: "2013.12 ~ 2015.09", name: "군대(육군 병장 만기 전역)" },
  { date: "2015.09 ~ 2015.12", name: "방황 및 노가다" },
  { date: "2015.12 ~ 2016.11", name: "대입을 위해 수능 공부" },
  {
    date: "2017.03 ~ 2021.02",
    name: "한국교원대학교 기술교육과(주), 컴퓨터교육과(복수)",
  },
  {
    date: "2021.03 ~ 2021.12",
    name: "경일게임아카데미: 블록체인 기반 핀테크 및 응용 SW개발자 양성과정",
  },
  {
    date: "2022.01 ~ 2022.06",
    name: "시티랩스 개발직군 백엔드 개발: Nodejs, MySQL, mongoDB, Solidity",
  },
];

const Way = () => {
  return (
    <Stack paddingY={10}>
      <Typography variant="h2" align="center" paddingTop={15}>
        {" "}
        걸어온 길
      </Typography>
      {way.map((v, i) => {
        if (i != way.length - 1) {
          return (
            <Grid container paddingY={5} spacing={5} key={v.date}>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  {v.date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  {v.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  ↓
                </Typography>
              </Grid>
            </Grid>
          );
        } else {
          return (
            <Grid container paddingY={5} spacing={5} key={v.date}>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  {v.date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  {v.name}
                </Typography>
              </Grid>
            </Grid>
          );
        }
      })}
    </Stack>
  );
};

export default Way;
