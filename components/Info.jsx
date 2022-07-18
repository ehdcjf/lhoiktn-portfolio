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
      <Typography variant="h2" align="center">
        기본정보
      </Typography>
      <Grid container padding={10} marginBottom={10} spacing={12}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15vw",
            }}
          >
            <Image src={Hero} alt="김동철 사진" width={300} height={400} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container padding={3} spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontFamily: "ROKAMedium" }}>
                이름: 김동철
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">생년월일: 1994.08.23</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">주소: 서울특별시 송파구</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">전화번호: 010-7428-0177</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">이메일: kdch0823@naver.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Info;
