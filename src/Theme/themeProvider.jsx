import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import LandingPage from '../FirstPage/LandingPage'

function theme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <LandingPage/>
    </ThemeProvider>
  );
}
