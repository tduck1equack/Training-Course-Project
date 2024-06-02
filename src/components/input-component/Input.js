import React, { useContext, useEffect, useState } from "react";

import "../style/Input.css";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, getEditId } from "../store/todoListActions";
import axios from "axios";
import { ACTION_TYPE } from "../store/todoReducer";

const Input = (props) => {
  const [value, setValue] = useState("");

  const todoList = useSelector((state) => state.todoList);
  const editId = useSelector((state) => state.editId);

  const todoDispatch = useDispatch();
  const { placeholder, inputRef } = props;

  const { theme } = useContext(ThemeContext);

  const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/todoList";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios
        .patch(endpoint + editId, { name: value })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      todoDispatch(editTodo(value));
      todoDispatch(getEditId({ id: null }));
    } else {
      todoDispatch(addTodo(value));
      // todoDispatch({ type: ACTION_TYPE.ADD_TODO, payload: value });
      axios
        .post(endpoint, {
          name: value,
          id: todoList.length + 1,
          status: false,
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    }
    setValue("");
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log(value);
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
