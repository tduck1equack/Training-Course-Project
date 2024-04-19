import React from "react";

const theme = {
  light: {
    background: "#f5f5f5",
    secondary: "#fff",
    button: "#fff",
    textColor: "#000000",
  },
  dark: {
    background: "#31363f",
    secondary: "#222831",
    button: "#76abae",
    textColor: "#ffffff",
  },
};

const ThemeContext = React.createContext(theme.light);

const ThemeConsumer = ThemeContext.Consumer;
const ThemeProvider = ThemeContext.Provider;

export { theme, ThemeContext, ThemeConsumer, ThemeProvider };
