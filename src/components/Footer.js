import React from "react";
import "./style/Footer.css";
import { THEME, ThemeConsumer } from "./style/theme";

const Footer = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="footer">
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Double-click to edit a todo
          </p>
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Created by the TodoMVC Team
          </p>
          <p className={theme === THEME.LIGHT ? "text" : "dark"}>
            Part of <a href="https://todomvc.com/">TodoMVC</a>
          </p>
        </div>
      )}
    </ThemeConsumer>
  );
};
export default Footer;
