import React from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";
import "../style/Item.css";
import { THEME, ThemeConsumer } from "../style/theme";
const Item = (props) => {
  const {
    item,
    onClickHandler,
    onChangeStatusHandler,
    handleEditTodo,
    handleDelete,
  } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`item ${theme === THEME.LIGHT ? "" : "dark-item"}`}>
          <Checkbox
            checked={item.status}
            onChangeHandler={onChangeStatusHandler}
            onClickHandler={() => onClickHandler(item)}
          />
          <div className={`item-name ${item.status ? "completed" : ""}`}>
            {item.name}
          </div>

          <div className="side-menu">
            <Button name="Edit" onClick={() => handleEditTodo(item)} />
            <Button name="Delete" onClick={() => handleDelete(item)} />
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};
export default Item;
