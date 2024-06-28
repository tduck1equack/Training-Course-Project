import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";
import "../style/Item.css";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch } from "react-redux";
import {
  changeTodoStatus,
  changeTodoStatusAction,
  removeTodo,
  removeTodoAction,
} from "../store/todoListActions";
import axios from "axios";
import { todoAPI } from "../api/axiosIndex";
import { ACTION_TYPE } from "../store/todoReducer";
const Item = (props) => {
  const todoDispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const { item, handleEditTodo } = props;

  const handleDelete = (item) => {
    todoDispatch(removeTodoAction(item));
    /* todoAPI
      .delete("todoList/" + item.id)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.log(err)); */
  };

  return (
    <div className={`item ${theme === THEME.LIGHT ? "" : "dark-item"}`}>
      <Checkbox
        checked={item.status}
        onClickHandler={() => todoDispatch(changeTodoStatusAction(item))}
      />
      <div className={`item-name ${item.status ? "completed" : ""}`}>
        {item.name}
      </div>
      <div className="side-menu">
        <Button name="Edit" onClick={() => handleEditTodo(item)} />
        <Button
          name="Delete"
          onClick={() => {
            handleDelete(item);
          }}
        />
      </div>
    </div>
  );
};
export default Item;
