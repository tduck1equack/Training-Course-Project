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

// import child components
// import Input from "./input-component/Input";
// import ArrowDown from "./input-component/ArrowDown";
import List from "./input-component/List";
import Menu from "./input-component/Menu";
import { Loading } from "./miscellaneous/Loading";

// stylesheet
import "./style/Main.css";

import { THEME, ThemeContext } from "./style/theme";
import { useDispatch, useSelector } from "react-redux";
import { getEditId, toggleStatusAll } from "./store/todoListActions";
import axios from "axios";
// dynamic import
const Input = lazy(() => delaySimulation(import("./input-component/Input")));
const ArrowDown = lazy(() =>
  delaySimulation(import("./input-component/ArrowDown"))
);

// delay simulator to simulate a 2s delay
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

// actual Main component
const Main = () => {
  const todoList = useSelector((state) => state.todoList);
  const editId = useSelector((state) => state.editId);

  const todoDispatch = useDispatch();

  const [filter, setFilter] = useState(FILTER.ALL);
  const inputRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  let count = todoList.filter((i) => !i.status).length;

  const toggleCompleted = useCallback(
    (e) => {
      todoDispatch(toggleStatusAll(e));
    },
    [todoList]
  );

  const handleEditRequest = useCallback(
    (item) => {
      inputRef.current.focus();
      inputRef.current.value = item.name;
      todoDispatch(getEditId(item));
    },
    [todoList]
  );
  const handleFilter = useCallback((filter) => {
    setFilter(filter);
  }, []);

  useEffect(() => {
    document.title = `${count} todos left!`;
    return () => {
      console.log("Destructing Main component");
    };
  }, [count]);
  return (
    <div
      className={`input-wrapper ${theme === THEME.LIGHT ? "" : "dark-wrapper"}`}
    >
      <Suspense fallback={<Loading />}>
        <Input
          editId={editId}
          placeholder="What needs to be done?"
          inputRef={inputRef}
        />
        <ArrowDown onClick={toggleCompleted} />
      </Suspense>
      <List
        list={todoList}
        filter={filter}
        editTodoHandler={handleEditRequest}
      />
      {todoList.length !== 0 ? (
        <Menu count={count} handleFilter={handleFilter} />
      ) : (
        ""
      )}
    </div>
  );
};
export { Main, delaySimulation, FILTER };
