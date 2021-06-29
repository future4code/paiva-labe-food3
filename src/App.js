import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./globalStyles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
