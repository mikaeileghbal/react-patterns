import React, { createContext, useState } from "react";
import getTheme from "./themes";

export const ThemeContext = createContext("dark");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const ProviderValue = { theme: getTheme(theme), toggleTheme };

  return (
    <ThemeContext.Provider value={ProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
