import React, {
  Suspense,
  lazy,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { produce } from "immer";
// import Input from "./input-component/Input";
import ArrowDown from "./input-component/ArrowDown";
import List from "./input-component/List";
import Menu from "./input-component/Menu";
import { Loading } from "./miscellaneous/Loading";

import "./style/Main.css";

import { THEME, ThemeContext } from "./style/theme";

const Input = lazy(() => delaySimulation(import("./input-component/Input")));

const delaySimulation = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};
const FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(FILTER.ALL);
  const inputRef = useRef(null);
  const editRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  let editId = useRef(null);
  let count = todoList.filter((i) => !i.status).length;

  console.log("Component: Main");

  const addEditToList = useCallback(
    (item) => {
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
              const todo = {
                id: todoList.length + 1,
                name: item,
                status: false,
              };
              draft.push(todo);
            })
          );
        }
      }
    },
    [todoList]
  );
  const toggleCompleted = (e) => {
    setTodoList(todoList.map((i) => ({ ...i, status: e.target.checked })));
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
    editRef.current = console.log("perv");
    console.log(inputRef);
    console.log(editRef);
    // inputRef.current.value = item.name;
    // editId.current = item.id;
  };
  const clearCompleted = (e) => {
    setTodoList(todoList.filter((i) => !i.status));
  };
  const handleFilter = useCallback((filter) => {
    setFilter(filter);
  }, []);

  useEffect(() => {
    document.title = `${count} todos left!`;
  }, [count]);

  return (
    <div
      className={`input-wrapper ${theme === THEME.LIGHT ? "" : "dark-wrapper"}`}
    >
      <button onClick={() => console.log(todoList)}> view list</button>
      <Suspense fallback={<Loading />}>
        <Input
          onSubmit={addEditToList}
          placeholder="What needs to be done?"
          inputRef={inputRef}
          editRef={editRef}
        />
      </Suspense>
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
export { Main, FILTER, delaySimulation };
