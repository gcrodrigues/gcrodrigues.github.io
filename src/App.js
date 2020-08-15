import React from "react";
import { LayoutProvider } from "./context/themeContext";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <LayoutProvider>
      <Routes />
      <GlobalStyle />
    </LayoutProvider>
  );
};

export default App;
