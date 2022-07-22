import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Image from "next/image";

import Typography from "@mui/material/Typography";

const skills = [
  {
    tag: "Frontend",
    images: [
      require("../asset/images/skills/html.png"),
      require("../asset/images/skills/css.png"),
      require("../asset/images/skills/js.png"),
      require("../asset/images/skills/React.png"),
      require("../asset/images/skills/Redux.png"),
      require("../asset/images/skills/redux-saga.png"),
      require("../asset/images/skills/nextjs.png"),
    ],
  },
  {
    tag: "Backend",
    images: [
      require("../asset/images/skills/Nodejs.png"),
      require("../asset/images/skills/mysql.png"),
      require("../asset/images/skills/mariadb.png"),
      require("../asset/images/skills/mongodb.png"),
    ],
  },
  {
    tag: "BlockChain",
    images: [
      require("../asset/images/skills/litecoin.png"),
      require("../asset/images/skills/ethereum.png"),
      require("../asset/images/skills/klaytn.jpg"),
      require("../asset/images/skills/solidity.png"),
      // require("../asset/images/skills/hlf.png"),
    ],
  },
  {
    tag: "Version Control",
    images: [
      require("../asset/images/skills/git.png"),
      require("../asset/images/skills/github.png"),
    ],
  },
  {
    tag: "Deployment",
    images: [
      require("../asset/images/skills/aws.png"),
      require("../asset/images/skills/Docker.png"),
    ],
  },
];

const Skills = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
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
        id="Skill"
        marginTop={{ xl: "20vh", lg: "20vh", md: "10vh" }}
        marginBottom="4vh"
      >
        기술
      </Typography>
      {skills.map((v, i) => {
        return (
          <Box key={v.tag} width="100%">
            <Divider>
              <Typography
                sx={{
                  typography: {
                    xl: "h5",
                    lg: "h5",
                    md: "h5",
                    sm: "h5",
                    sx: "h5",
                  },
                }}
                align="center"
              >
                {v.tag}
              </Typography>
            </Divider>
            <Grid container paddingX={5} paddingTop={5} spacing={5}>
              {v.images.map((image, l) => {
                return (
                  <Grid item xs={3} key={l}>
                    <Image
                      key={image}
                      src={image}
                      alt={`${v.tag} 관련 logo`}
                      width={130}
                      height={130}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Skills;
