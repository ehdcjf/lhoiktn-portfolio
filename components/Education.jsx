import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import ImageSlider from "./ImageSlider";
import ImageList from "./ImageList";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const link = `http://www.kiweb.or.kr/community/ki_story.html?mode=view&tname=kistory&idx=6300&page=2&keyfield=&keystring=`;
const Education = () => {
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
      <Typography id="Education" variant="h2" align="center" paddingTop={15}>
        학력&교육
      </Typography>

      <Grid container paddingTop={5} spacing={10} width="100%">
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="left" marginBottom={3}>
                한국교원대학교 2017.03~2021.02
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  "}주전공: 기술교육
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  "}복수전공: 컴퓨터교육
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  " +
                  "기술교육 전공과목 중 C프로그래밍 강의를 접하면서 프로그래밍에 흥미를 느끼게되어 컴퓨터교육을 복수전공"}
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  " + "이수과목"}
              </Typography>
              <Grid container rowSpacing={2}>
                <Grid item xs={6}>
                  <Image
                    src={require("../asset/images/education/edu1.png")}
                    alt={`이수과목1`}
                    width={700}
                    height={300}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Image
                    src={require("../asset/images/education/edu2.png")}
                    alt={`이수과목2`}
                    width={700}
                    height={400}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="left" marginBottom={3}>
                경일게임아카데미 2021.03~2021.12
              </Typography>
              <Typography variant="h4" align="left" marginBottom={2}>
                블록체인 기반 핀테크 및 응용 SW개발자 양성과정
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  "}Html/CSS, Javascript, Node.js, React, MySQL,AWS 등 웹
                개발 과 Solidity, Litecoin,Ehereum, Klaytn 등 블록체인에 대한
                교육 이수
              </Typography>
              <Typography variant="h5" align="left" marginBottom={2}>
                {"·  "}{" "}
                <Link href={link} target="_blank">
                  협약기업과 프로젝트 진행 후 발표
                </Link>
              </Typography>
              <Grid container rowSpacing={2}>
                <Grid item xs={6}>
                  <Image
                    src={require("../asset/images/project/portfolio-6-8.png")}
                    alt={`프로젝트 발표`}
                    width={700}
                    height={500}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Image
                    src={require("../asset/images/project/portfolio-6-9.png")}
                    alt={`프로젝트 발표`}
                    width={700}
                    height={500}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Education;
