import React, { useContext } from "react";
import "./style/Footer.css";
import { THEME, ThemeContext } from "./style/theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
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
  );
};
export default Footer;
