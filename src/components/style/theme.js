import React from "react";

const THEME = {
  LIGHT: {
    background: "#f5f5f5",
    secondary: "#fff",
    button: "#fff",
    textColor: "#000000",
    header: "#b83f45",
  },
  DARK: {
    background: "#31363f",
    secondary: "#222831",
    button: "#76abae",
    textColor: "#ffffff",
    header: "#ffffff",
  },
};

const ThemeContext = React.createContext({
  theme: THEME.LIGHT,
  changeTheme: () => null,
});

const ThemeConsumer = ThemeContext.Consumer;
const ThemeProvider = ThemeContext.Provider;

class ThemeChanger extends React.Component {
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
}
export { THEME, ThemeContext, ThemeConsumer, ThemeProvider, ThemeChanger };
