import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return theme;
}

export { useThemeContext };
