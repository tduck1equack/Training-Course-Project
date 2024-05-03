import React, { useContext, useRef, useState } from "react";
import { produce } from "immer";
import Input from "./input-component/Input";
import ArrowDown from "./input-component/ArrowDown";
import List from "./input-component/List";
import Menu from "./input-component/Menu";
import "./style/Main.css";
import { THEME, ThemeContext } from "./style/theme";
const FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(FILTER.ALL);
  const inputRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  let editId = useRef(null);
  let count = todoList.filter((i) => !i.status).length;

  const addEditToList = (item) => {
    if (editId.current) {
      setTodoList(
        todoList.map((i) =>
          i.id === editId.current ? { ...i, name: item } : i
        )
      );
      editId.current = null;
    } else {
      if (item.length > 1) {
        setTodoList(
          produce((draft) => {
            const todo = { id: todoList.length + 1, name: item, status: false };
            draft.push(todo);
          })
        );
      }
    }
  };
  const toggleCompleted = (e) => {
    if (e.target.checked) {
      setTodoList(todoList.map((i) => ({ ...i, status: true })));
    } else {
      setTodoList(todoList.map((i) => ({ ...i, status: false })));
    }
    console.log("Toggled!");
  };
  const handleDelete = (item) => {
    setTodoList(todoList.filter((i) => i.id !== item.id));
  };
  const handleChangeStatus = (item) => {
    setTodoList(
      produce((draft) => {
        const todo = draft[item.id - 1];
        todo.status = !todo.status;
      })
    );
  };
  const handleEditRequest = (item) => {
    inputRef.current.focus();
    inputRef.current.value = item.name;
    editId.current = item.id;
  };
  const clearCompleted = (e) => {
    setTodoList(todoList.filter((i) => !i.status));
  };
  const handleFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <div
      className={`input-wrapper ${theme === THEME.LIGHT ? "" : "dark-wrapper"}`}
    >
      <button onClick={() => console.log(todoList)}> view list</button>
      <Input
        onSubmit={addEditToList}
        placeholder="What needs to be done?"
        inputRef={inputRef}
      />
      <ArrowDown onClick={toggleCompleted} />
      <List
        list={todoList}
        filter={filter}
        statusHandler={handleChangeStatus}
        editTodoHandler={handleEditRequest}
        deleteHandler={handleDelete}
      />
      {todoList.length ? (
        <Menu
          count={count}
          handleFilter={handleFilter}
          clearHandler={clearCompleted}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export { Main, FILTER };
