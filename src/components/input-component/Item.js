import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";
import "../style/Item.css";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch } from "react-redux";
import { changeTodoStatus, removeTodo } from "../store/todoListActions";
const Item = (props) => {
  const todoDispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const { item, handleEditTodo } = props;

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
        <Button name="Delete" onClick={() => todoDispatch(removeTodo(item))} />
      </div>
    </div>
  );
};
export default Item;
