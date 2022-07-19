import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
const way = [
  { date: "2010.03 ~ 2013.02", history: "배명고등학교" },
  { date: "2013.03 ~ 2013.11", history: "건설현장에서 일함" },
  { date: "2013.12 ~ 2015.09", history: "군대(육군 병장 만기 전역)" },
  { date: "2015.09 ~ 2015.12", history: "건설현장에서 일함" },
  { date: "2015.12 ~ 2016.11", history: "대입을 위해 수능 공부" },
  {
    date: "2017.03 ~ 2021.02",
    history: "한국교원대학교 기술교육과(주전공), 컴퓨터교육과(복수전공)",
  },
  {
    date: "2021.03 ~ 2021.12",
    history: "경일게임아카데미: 블록체인 기반 핀테크 및 응용 SW개발자 양성과정",
  },
  {
    date: "2022.01 ~ 2022.06",
    history: "시티랩스 개발직군 백엔드 개발: Nodejs, MySQL, mongoDB, Solidity",
  },
];

const History = () => {
  return (
    <Stack marginY={10}>
      <Typography id="History" variant="h2" align="center" paddingTop={15}>
        {" "}
        삶의 이력
      </Typography>
      <Timeline position="right" sx={{ width: "100vw" }}>
        {way.map((w, i) => {
          return (
            <TimelineItem key={w.date}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {w.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "20px", px: 2, width: "100%" }}>
                <Typography variant="body1" component="span">
                  {w.history}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Stack>
  );
};

export default History;
