import React from "react";
import Router from "./routes/Router";
import theme from '../src/constants/theme'
import { ThemeProvider } from '@material-ui/styles';
import { GlobalState } from "./global/GlobalState";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalState>
           <Router />
        </GlobalState>
    </ThemeProvider>
  );
};

export default App;
