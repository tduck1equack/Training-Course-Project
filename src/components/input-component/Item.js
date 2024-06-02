import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";
import "../style/Item.css";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch } from "react-redux";
import { changeTodoStatus, removeTodo } from "../store/todoListActions";
import axios from "axios";
const Item = (props) => {
  const todoDispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const { item, handleEditTodo } = props;
  const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/todoList/";

  const handleDelete = (item) => {
    axios
      .delete(endpoint + item.id)
      .then((res) => {
        console.log(res);
        todoDispatch(removeTodo(item));
        return res;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`item ${theme === THEME.LIGHT ? "" : "dark-item"}`}>
      <Checkbox
        checked={item.status}
        onClickHandler={() => todoDispatch(changeTodoStatus(item))}
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
