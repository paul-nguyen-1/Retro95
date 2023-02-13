import React from "react";
import { AppBar, styleReset, TextInput, Toolbar } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Menu from "./components/Menu";
import Countries from "./components/Countries";
import CountriesTab from "./components/CountriesTab";

const GlobalStyles = createGlobalStyle`
  display: flex;

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    background: #018281;
  }
  ${styleReset}
`;

const App = () => {
  return (
    <div>
      <GlobalStyles style={{ height: "400px" }} />
      <ThemeProvider theme={original}>
        <nav>
          <AppBar style={{ zIndex: 3, top: "auto", bottom: "0" }}>
            <Toolbar>
              <Menu />
              <CountriesTab />
            </Toolbar>
          </AppBar>
        </nav>
        <main>
          <Countries />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
