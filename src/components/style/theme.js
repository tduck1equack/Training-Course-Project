import React, { useState } from "react";

const THEME = {
  LIGHT: "light",
  /* background: "#f5f5f5",
    secondary: "#fff",
    button: "#fff",
    textColor: "#000000",
    header: "#b83f45", */
  DARK: "dark",
  /* background: "#31363f",
    secondary: "#222831",
    button: "#76abae",
    textColor: "#ffffff",
    header: "#ffffff", */
};

const ThemeContext = React.createContext({
  theme: THEME.LIGHT,
  changeTheme: () => null,
});

const ThemeConsumer = ThemeContext.Consumer;
const ThemeProvider = ThemeContext.Provider;

const ThemeChanger = (props) => {
  const [theme, setTheme] = useState(THEME.LIGHT);
  const { children } = props;
  const changeTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    document.body.style.backgroundColor =
      theme === THEME.LIGHT ? "#31363f" : "#f5f5f5";
  };
  return (
    <ThemeProvider value={{ theme, changeTheme }}>{children}</ThemeProvider>
  );
};
/* class ThemeChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEME.LIGHT,
    };
  }
  changeTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
      };
    });
  };
  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeProvider value={{ theme, changeTheme: this.changeTheme }}>
        {children}
      </ThemeProvider>
    );
  }
} */
export { THEME, ThemeContext, ThemeConsumer, ThemeProvider, ThemeChanger };
