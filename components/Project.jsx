import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Link from "next/link";

import ImageSlider from "./ImageSlider";
import ImageList from "./ImageList";
import Typography from "@mui/material/Typography";
import projectImage0100 from "../asset/images/project/portfolio-1.png";
import projectImage0101 from "../asset/images/project/portfolio-1-1.png";
import projectImage0102 from "../asset/images/project/portfolio-1-2.png";
import projectImage0201 from "../asset/images/project/portfolio-2_1.png";
import projectImage0202 from "../asset/images/project/portfolio-2_2.png";
import projectImage0203 from "../asset/images/project/portfolio-2_3.png";
import projectImage0204 from "../asset/images/project/portfolio-2_4.png";
import projectImage0301 from "../asset/images/project/portfolio-3-1.gif";
import projectImage0302 from "../asset/images/project/portfolio-3-2.gif";
import projectImage0303 from "../asset/images/project/portfolio-3_1.png";
import projectImage0304 from "../asset/images/project/portfolio-3_2.png";
import projectImage0305 from "../asset/images/project/portfolio-3_3.png";
import projectImage0306 from "../asset/images/project/portfolio-3_4.png";
import projectImage0401 from "../asset/images/project/portfolio-4-1.gif";
import projectImage0501 from "../asset/images/project/portfolio-5-1.png";
import projectImage0502 from "../asset/images/project/portfolio-5-10.png";
import projectImage0601 from "../asset/images/project/portfolio-6-1.png";
import projectImage0602 from "../asset/images/project/portfolio-6-3.png";
import projectImage0603 from "../asset/images/project/portfolio-6-4.png";
import projectImage0604 from "../asset/images/project/portfolio-6-5.png";
import projectImage0605 from "../asset/images/project/portfolio-6-6.png";
import projectImage0606 from "../asset/images/project/portfolio-6-7.png";
import projectImage0701 from "../asset/images/project/portfolio-8.png";
import projectImage0702 from "../asset/images/project/portfolio-8-1.png";

const project = [
  {
    name: "Node.js 서버개발자 자격요건 부수기",
    type: "개인 토이 프로젝트",
    role: [],
    isSlider: true,
    skill: [
      { tag: "Frontend", skill: "Next.js, redux, redux-saga" },
      { tag: "Backend", skill: "Node.js, websocket" },
      { tag: "BlockChain", skill: "caver.js, KIP-7, KIP-17" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2, AWS S3" },
    ],
    date: "2022.7.12 ~ 2022.07.18",
    link: [
      { name: "프로젝트 URL", link: "http://3.35.121.149/" },
      {
        name: "프론트엔드 깃허브",
        link: "https://github.com/ehdcjf/goals_front",
      },
      {
        name: "백엔드 깃허브",
        link: "https://github.com/ehdcjf/goal-app",
      },
      {
        name: "Swagger API",
        link: "http://3.35.121.149/api/docs/",
      },
    ],
    detail: [
      "간단한 ToDoList Web Application",
      "Node.js 서버개발자 채용공고의 자격요건을 충족하기 위해 시작한 프로젝트",
      "주요기능인 경매,구매는 websocket을 이용하여 실시간 이벤트를 처리.",
      "프론트엔드는 빠른 개발을 위해 React보다 익숙한 Next.js를 사용. Redux-Saga를 사용하여 상태관리하고, ui는 Mui를 사용",
      "백엔드는 Node.js 와 MongoDB를 사용하여 개발 후 EC2 배포",
      "<<최초 프로젝트 계획>>",
      "1. React, Node.js. MySql로 To Do List 어플리케이션 제작 및 AWS EC2배포",
      "2. Docker. Kubernetes, ECS Cheet Sheet 만들어서 첨부",
      "3. 도커 복습 끝내면, ECS로 배포",
      "4. Git Cheet Sheet 작성 및 첨부",
      "5. Jenkins. CI/CD Cheet Sheet 작성 및 첨부",
      "6. Linux Cheet Sheet 작성 및 첨부",
      "7. 시간 남으면 Nest, TypeScript 마이그레이션",
    ],
    images: [
      {
        label: "Node.js 서버개발자 자격요건 부수기1",
        imgPath: projectImage0701,
      },
      {
        label: "Node.js 서버개발자 자격요건 부수기2",
        imgPath: projectImage0702,
      },
    ],
  },
  {
    name: "Klaytn 기반 NFT 의류 쇼핑몰",
    type: "팀프로젝트(3명):",
    role: [
      "팀장",
      "메인페이지 프론트",
      "마이페이지 프론트",
      "klaytn Token 발행",
      "klaytn NFT 발행",
      "websocket",
      "쇼핑몰 DB 설계",
    ],
    isSlider: true,
    skill: [
      { tag: "Frontend", skill: "Next.js, redux, redux-saga" },
      { tag: "Backend", skill: "Node.js, websocket" },
      { tag: "BlockChain", skill: "caver.js, KIP-7, KIP-17" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2, AWS S3" },
    ],
    date: "2021.10.14 ~2021.11.29",
    link: [
      { name: "프로젝트 URL", link: "http://3.36.230.95/" },
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/dnjzm108/NFT_MARCKET",
      },
    ],
    detail: [
      "피플스테크라는 회사와 협업으로 진행한 프로젝트로, 피플스테크측 요구사항에 따라 개발을 진행",
      "klay를 토큰으로 교환하여, 토큰으로 상품을 구매하고, 상품을 구매하면 NFT가 발행되고, 실물 상품을 배송하는 의류 쇼핑몰 입니다.",
      "주요기능인 경매,구매는 websocket을 이용하여 실시간 이벤트를 처리.",
      "블록체인은 Klaytn에서 제공하는 SDK caver.js를 이용하여 구현",
      "kaikas 지갑을 이용해서 로그인합니다. 마이페이지로 가서 판매자 등록 신청을 합니다. 관리자페이지 로 가서 (id:root,pw:root) 자신의 아이디를 판매자 인증 합니다. 다시 마이페이지로 돌아와보면 인증이 완료된것을 확인할 수 있습니다. 그리고 상품을 등록합니다. 상품을 구매하려면 토큰이 필요합니다. 토큰교환 페이지에서 토큰을 교환하고, 상품을 구매 또는 입찰합니다.마이페이지에서 잘 구매되었는지 확인합니다.",
    ],
    images: [
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰1",
        imgPath: projectImage0601,
      },
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰2",
        imgPath: projectImage0602,
      },
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰3",
        imgPath: projectImage0603,
      },
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰4",
        imgPath: projectImage0604,
      },
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰5",
        imgPath: projectImage0605,
      },
      {
        label: "Klaytn 기반 NFT 의류 쇼핑몰6",
        imgPath: projectImage0606,
      },
    ],
  },
  {
    name: "악어코인",
    type: "팀프로젝트(5명)",
    role: [
      "팀장",
      "백엔드",
      "rpc통신",
      "거래소 DB설계",
      "프론트엔드",
      "litecoin 빌드 및 배포",
    ],
    isSlider: true,
    skill: [
      { tag: "Frontend", skill: "React, redux" },
      { tag: "Backend", skill: "Node.js" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2" },
    ],
    date: "2021.3.30 ~ 2021.04.07",
    link: [
      { name: "프로젝트 URL", link: "https://lotteconfmain.github.io/" },
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/ehdcjf/lotteconfmain.github.io",
      },
    ],
    detail: [
      "악어는 한번에 50개의 알을 낳습니다. 그 중 절반은 태어나기도 전에 다른 동물의 먹이가 됩니다. 또 알에서 깨어난 악어 중 대부분이 다른 동물의 먹이가 되고, 고작 한 두 마리의 악어가 간신히 성체로 성장합니다. 그 한 두마리의 악어가 늪을 지배합니다. 악어코인은 끝까지 살아남아 블록체인판을 지배하겠다는 뜻을 가지고 있습니다.",
      "itecoin0.15버전으로 linux버전으로 빌드한 악어코인을 기반으로 거래소 프로젝트 시작",
      "트랜잭션 속도가 느려서 팀원들과 이를 해결하기 위한 회의를 진행",
      "시간부족으로 미완성",
    ],
    images: [
      {
        label: "악어코인 거래소",
        imgPath: projectImage0501,
      },
    ],
  },
  {
    name: "악어코인 빌드",
    type: "개인프로젝트",
    role: [],
    isSlider: false,
    skill: [{ tag: "BlockChain", skill: "Litecoin 0.15" }],
    date: "2021.10.1 ~ 2021.10.04",
    link: [
      {
        name: "참고 블로그",
        link: "https://www.hackster.io/pjdecarlo/how-to-make-a-cryptocurrency-using-litecoin-v0-15-source-fb5e82",
      },
      { name: "프로젝트 깃허브", link: "https://github.com/ehdcjf/aguhcoin" },
      {
        name: "프로젝트 블로그",
        link: "https://lhoiktiv.tistory.com/category/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8/%EB%9D%BC%EC%9D%B4%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%A4%EC%8A%B5",
      },
    ],
    detail: [
      "Litecoin 0.15 버전을 사용하여 Window용으로 빌드.",
      "코인 이름 및 단위,이미지 수정",
      "테스트가 쉽도록 코인 가용 시작 개수 5개로 수정",
      "rpc를 통해 데몬에 계정을 추가하고, 채굴, 트랜잭션 등을 실습",
    ],
    images: [
      {
        label: "악어코인 빌드1",
        imgPath: projectImage0502,
      },
    ],
  },
  {
    name: "프레지던트 메이커",
    type: "팀프젝트(1명)",
    role: ["전부"],
    isSlider: false,
    skill: [
      { tag: "Frontend", skill: "React" },
      { tag: "Backend", skill: "Node.js" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2" },
    ],
    date: "2021.07.27 ~ 2021.08.24",
    link: [
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/ehdcjf/PresidentMaker",
      },
    ],
    detail: [
      "여론조사 사이트",
      "성별, 나이, 지역, 거주지, 고향, 19년 대선 지지 후보에 따른 20대 대선 지지 후보를 확인이 가능",
      "투표에 여러번 참여하기 힘들게 kakao login API를 사용하여 회원가입을 진행",
      "팀원들의 중도이탈 및 불참으로 혼자 작업했으며, 결국 완성하지 못함",
    ],
    images: [
      {
        label: "프레지던트 메이커",
        imgPath: projectImage0401,
      },
    ],
  },
  {
    name: "학원 사이트 리뉴얼 + 관리자페이지 만들기",
    type: "팀프로젝트",
    role: [
      "팀장",
      "DB설계",
      "관리자 페이지",
      "메인페이지",
      "커리큘럼페이지",
      "실시간 상담",
    ],
    isSlider: false,
    skill: [
      { tag: "Frontend", skill: "html, css, javascript" },
      { tag: "Backend", skill: "Node.js, Socket.io" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2" },
    ],
    date: "2021.6.10 ~ 2021.06.28",
    link: [
      { name: "프로젝트 URL", link: "13.209.126.185:3000" },
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/hyejjun/Gyungil_renewal_Team",
      },
    ],
    detail: [
      "기존 학원사이트의 문제점을 개선하는 프로젝트",
      "기존 학원 사이트에서 관리자가 할 수 있는 것이 부족하다고 생각하여 관리자페이지에서 더욱 많은 것을 할 수 있도록 관리자페이지에 더 많은 기능을 추가",
      "기존 하나의 이미지 파일로 관리되던 커리큘럼을 관리자페이지에서 직접 만들 수 있도록 했음",
      "websocket을 이용하여, 실시간 상담 기능을 추가",
    ],

    images: [
      {
        label: "학원사이트 리뉴얼1",
        imgPath: projectImage0301,
      },
      {
        label: "학원사이트 리뉴얼2",
        imgPath: projectImage0302,
      },
      {
        label: "학원사이트 리뉴얼3",
        imgPath: projectImage0303,
      },
      {
        label: "학원사이트 리뉴얼4",
        imgPath: projectImage0304,
      },
      {
        label: "학원사이트 리뉴얼5",
        imgPath: projectImage0305,
      },
      {
        label: "학원사이트 리뉴얼6",
        imgPath: projectImage0306,
      },
    ],
  },
  {
    name: "게시판 만들기 미니프로젝트",
    type: "팀프로젝트(3명)",
    role: ["팀장", "DB설계", "댓글", "답글", "답글에 답글"],
    isSlider: true,
    skill: [
      { tag: "Frontend", skill: "html, css, javascript" },
      { tag: "Backend", skill: "Node.js" },
      { tag: "Database", skill: "MariaDB" },
      { tag: "Deployment", skill: "AWS EC2" },
    ],
    date: "2021.5.12 ~ 2021.05.19",
    link: [
      { name: "프로젝트 URL", link: "13.209.126.185:4000" },
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/ohse-emily/teamproject_OKE",
      },
    ],
    detail: [
      "Node.js,mysql을 이용한 CRUD를 배우고 진행한 팀프로젝트.",
      "vanilla javascript로 비동기처리하여 댓글을 만드는데 집중",
      "댓글,답글,답글에 답글을 달 수 있도록 만들었습니다. 화면은 youtube 댓글창을 참고",
      "이벤트 버블링 때문에 머리가 너무 아파서 태어나서 처음으로 두통약을 먹으면서 코딩",
    ],
    images: [
      {
        label: "게시판 만들기 미니프로젝트1",
        imgPath: projectImage0201,
      },
      {
        label: "게시판 만들기 미니프로젝트2",
        imgPath: projectImage0202,
      },
      {
        label: "게시판 만들기 미니프로젝트3",
        imgPath: projectImage0203,
      },
      {
        label: "게시판 만들기 미니프로젝트4",
        imgPath: projectImage0204,
      },
    ],
  },
  {
    name: "롯데제과 메인페이지 클론",
    type: "개인프로젝트",
    role: [],
    isSlider: true,
    skill: [
      { tag: "Frontend", skill: "html, css, javascript" },
      { tag: "Deployment", skill: "github page" },
    ],
    date: "2021.3.30 ~ 2021.04.07",
    link: [
      { name: "프로젝트 URL", link: "https://lotteconfmain.github.io/" },
      {
        name: "프로젝트 깃허브",
        link: "https://github.com/ehdcjf/lotteconfmain.github.io",
      },
    ],
    detail: [
      "html,css,javascript를 배우고 진행한 생애 첫번째 프로젝트.",
      " javascript와 css애니메이션을 이용하여 빼빼로가 올라오는 부분, 텍스트 올라오는 부분, 맨 아래 쪽에 점찍기 만들면서 css 애니메이션과 DOM 조작 기본기를 쌓음",
    ],
    images: [
      {
        label: "롯데제과 클론페이지1",
        imgPath: projectImage0100,
      },
      {
        label: "롯데제과 클론페이지2",
        imgPath: projectImage0101,
      },
      {
        label: "롯데제과 클론페이지3",
        imgPath: projectImage0102,
      },
    ],
  },
];

const Project = () => {
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
      <Typography variant="h2" align="center" paddingTop={15}>
        프로젝트
      </Typography>

      <Grid container paddingTop={5} spacing={10} width="100%">
        {project.map((p, l) => {
          return (
            <Grid item xs={12} key={p.name}>
              <Card>
                <Grid container width="100%">
                  <Grid item xs={6}>
                    {p.isSlider ? (
                      <ImageSlider images={p.images} />
                    ) : (
                      <ImageList images={p.images} />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="h4" align="center" marginBottom={3}>
                        {p.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        marginBottom={2}
                      >
                        {p.type}
                      </Typography>
                      <Typography variant="body1" align="left" marginBottom={2}>
                        프로젝트 기간: {p.date}
                      </Typography>

                      {p.role.length > 0 ? (
                        <Typography
                          variant="body1"
                          align="left"
                          marginBottom={2}
                        >
                          {"역할: "}
                          {p.role.map((r) => {
                            return `${r}. `;
                          })}
                        </Typography>
                      ) : (
                        <></>
                      )}

                      {p.link.map((l) => {
                        return (
                          <Typography
                            variant="body1"
                            align="left"
                            key={l.link}
                            marginBottom={2}
                          >
                            {l.name}:
                            <Link href={l.link} target="_blank">
                              {l.link}
                            </Link>
                          </Typography>
                        );
                      })}
                      {p.skill.map((s) => {
                        return (
                          <Typography
                            variant="body1"
                            align="left"
                            key={p.name + s.tag}
                            marginBottom={1}
                          >
                            {s.tag}: {s.skill}
                          </Typography>
                        );
                      })}
                      <Typography variant="body1" align="left" marginTop={2}>
                        프로젝트 설명:
                      </Typography>
                      <Stack>
                        {p.detail.map((d) => {
                          return (
                            <Typography variant="body1" align="left" key={d}>
                              {`- ${d}`}
                            </Typography>
                          );
                        })}
                      </Stack>
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

export default Project;
