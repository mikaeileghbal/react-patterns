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

function getTheme(prop) {
  return themes[prop];
}

export default getTheme;
