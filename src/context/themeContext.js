import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark);
  const [width, setWidth] = useState(window.innerWidth);
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  const handleNavbar = () => {
    setNavIsOpen(!navIsOpen);
    document.body.style.overflow = navIsOpen ? "unset" : "hidden";
  };

  return (
    <LayoutContext.Provider
      value={{ toggleTheme, handleNavbar, theme, width, navIsOpen }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
