import React, { useContext, useEffect, useState } from "react";

import "../style/Input.css";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, getEditId } from "../store/todoListActions";

const Input = (props) => {
  const [value, setValue] = useState("");
  const todoDispatch = useDispatch();
  const editId = useSelector((state) => state.editId);
  const { placeholder, inputRef } = props;

  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      todoDispatch(editTodo(value));
      todoDispatch(getEditId({ id: null }));
    } else {
      todoDispatch(addTodo(value));
    }
    setValue("");
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => inputRef.current.focus(), []);

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
