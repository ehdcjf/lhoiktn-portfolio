import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "ROKAMedium",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "ROKAMedium";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.1/ROKAMedium.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }
      `,
    },
  },
});

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
