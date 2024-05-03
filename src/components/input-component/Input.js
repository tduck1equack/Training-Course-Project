import React, { useContext, useState } from "react";
import "../style/Input.css";
import { THEME, ThemeContext } from "../style/theme";
const Input = (props) => {
  const [value, setValue] = useState("");
  const { placeholder, inputRef, onSubmit } = props;
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        ref={inputRef}
        className={theme === THEME.LIGHT ? "" : "dark-input"}
      ></input>
    </form>
  );
};
export default Input;
