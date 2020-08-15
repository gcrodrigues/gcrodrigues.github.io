import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
  }

  return (
    <LayoutContext.Provider value={{ toggleTheme, theme, width }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
