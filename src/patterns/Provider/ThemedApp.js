import React, { useEffect, useState } from "react";
import ThemeProvider from "./ThemeProvider";
import { useThemeContext } from "./useThemeContext";

// const themes = {
//   light: {
//     backgroundColor: "#fff",
//     color: "#000",
//   },
//   dark: {
//     backgroundColor: "#333",
//     color: "#fff",
//   },
// };
// const ThemeContext = createContext();

export default function ThemedApp() {
  //const [theme, setTheme] = useState("dark");
  // function toggleTheme() {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // }
  // const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <div>
      {/* <ThemeContext.Provid value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provid> */}

      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}

function Toggle() {
  const { toggleTheme } = useThemeContext();

  return (
    <div>
      <label>
        <input type="checkbox" onClick={toggleTheme} />
        Change theme
      </label>
    </div>
  );
}

function List() {
  const { theme } = useThemeContext();
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    console.log("theme", theme);
    const { color } = theme;
    setTextColor(color);
  }, [theme]);

  return (
    <div>
      <ul style={theme}>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
        <li>List item 6</li>
      </ul>
      <p>{textColor}</p>
    </div>
  );
}
