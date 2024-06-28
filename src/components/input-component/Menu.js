import React, { useContext } from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
import { FILTER } from "../Main";
import { THEME, ThemeContext } from "../style/theme";
import { useDispatch } from "react-redux";
import { removeCompletedTodo } from "../store/todoListActions";
import { ACTION_TYPE } from "../store/todoReducer";

const Menu = (props) => {
  const { theme } = useContext(ThemeContext);
  const todoDispatch = useDispatch();

  const { count, handleFilter } = props;

  return (
    <div className="menu">
      <span className={theme === THEME.LIGHT ? "" : "dark-count"}>
        {count} item{count <= 1 ? "" : "s"} left!
      </span>
      <div className="button-menu">
        <div className="center-menu">
          <Button name="All" onClick={() => handleFilter(FILTER.ALL)} />
          <Button name="Active" onClick={() => handleFilter(FILTER.ACTIVE)} />
          <Button
            name="Completed"
            onClick={() => handleFilter(FILTER.COMPLETED)}
          />
        </div>
        <Button
          onClick={() =>
            todoDispatch({ type: ACTION_TYPE.REMOVE_TODO_COMPLETED.REQUEST })
          }
          name="Clear Completed"
          special="secondary"
        />
      </div>
    </div>
  );
};
export default Menu;
