import React from "react";
import "../style/Button.css";
import { THEME, ThemeConsumer } from "../style/theme";

const Button = (props) => {
  const { name, onClick, special } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <button
          onClick={onClick}
          className={`${special} ${theme === THEME.LIGHT ? "" : "dark-button"}`}
        >
          {name}
        </button>
      )}
    </ThemeConsumer>
  );
};
export default Button;
