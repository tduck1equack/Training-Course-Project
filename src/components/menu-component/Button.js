import React, { useContext } from "react";
import "../style/Button.css";
import { THEME, ThemeContext } from "../style/theme";

const Button = (props) => {
  const { theme } = useContext(ThemeContext);
  const { name, onClick, special } = props;

  console.log(`Component: ${name} button`);

  return (
    <button
      onClick={onClick}
      className={`${special} ${theme === THEME.LIGHT ? "" : "dark-button"}`}
    >
      {name}
    </button>
  );
};
export default Button;
