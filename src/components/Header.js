import React from "react";
import "./style/Header.css";
import { ThemeConsumer, ThemeContext } from "./style/theme";
class Header extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <h1 style={{ color: theme.header, transition: "all 0.5s ease" }}>
            todos
          </h1>
        )}
      </ThemeConsumer>
    );
  }
}
export default Header;
Header.contextType = ThemeContext;
