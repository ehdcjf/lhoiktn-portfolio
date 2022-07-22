import Image from "next/image";
import DefaultLayout from "../layout/DefaultLayout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hero from "../asset/images/hero/profile-img4.jpeg";

const Info = () => {
  return (
    <Stack>
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
        marginBottom="4vh"
      >
        기본정보
      </Typography>
      <Grid container spacing="4vh">
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column-reverse",
              justifyContent: "center",
            }}
          >
            <Image src={Hero} alt="김동철 사진" width={300} height={400} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
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
                gutterBottom
              >
                이름: 김동철
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                sx={{
                  typography: {
                    xl: "h4",
                    lg: "h5",
                    md: "h6",
                    sm: "body1",
                    sx: "body2",
                  },
                }}
              >
                생년월일: 1994.08.23
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
                gutterBottom
              >
                주소: 서울특별시 송파구
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
                gutterBottom
              >
                전화번호: 010-7428-0177
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
                gutterBottom
              >
                이메일: kdch0823@naver.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Info;
