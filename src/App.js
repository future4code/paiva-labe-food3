<<<<<<< HEAD
import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./globalStyles/GlobalStyles";
=======
>>>>>>> ebe89394c73db96ae5c606c3f24e1b45a782eeef

import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";




const App = () => {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <Router />
    </>
=======

    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>

>>>>>>> ebe89394c73db96ae5c606c3f24e1b45a782eeef
  );
};

export default App;
