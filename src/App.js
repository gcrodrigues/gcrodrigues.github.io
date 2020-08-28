import React from "react";
import { LayoutProvider } from "./context/themeContext";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <LayoutProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </LayoutProvider>
  );
};

export default App;
