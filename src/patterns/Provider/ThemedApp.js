import React, { createContext, useContext, useState } from "react";

const themes = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dark: {
    backgroundColor: "#333",
    color: "#fff",
  },
};

const ThemeContext = createContext();

export default function ThemedApp() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <div>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}

function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
  const { theme } = useContext(ThemeContext);
  console.log(theme);
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
    </div>
  );
}
