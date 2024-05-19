import React, {
  Suspense,
  lazy,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { produce } from "immer";
import { store, ACTION_TYPE } from "./store/store";

// import child components
// import Input from "./input-component/Input";
// import ArrowDown from "./input-component/ArrowDown";
import List from "./input-component/List";
import Menu from "./input-component/Menu";
import { Loading } from "./miscellaneous/Loading";

// stylesheet
import "./style/Main.css";

import { THEME, ThemeContext } from "./style/theme";
import { useSelector } from "react-redux";
import {
  addTodo,
  changeTodoStatus,
  editTodo,
  removeCompletedTodo,
  removeTodo,
  toggleStatusAll,
} from "./store/todoListActions";
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

  const [filter, setFilter] = useState(FILTER.ALL);
  const inputRef = useRef(null);
  const editRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  // const { todoList } = store.getState();

  let editId = useRef(null);
  let count = todoList.filter((i) => !i.status).length;

  const stopStoreListening = store.subscribe(() => {
    console.log("Store after dispatch: ", store.getState());
  });

  const addEditToList = useCallback((item) => {
    if (editId.current) {
      store.dispatch(editTodo(item, editId.current));
      editId.current = null;
    } else {
      if (item.length > 1) {
        store.dispatch(addTodo(item));
        console.log(todoList);
      }
    }
  }, []);
  const toggleCompleted = useCallback((e) => {
    store.dispatch(toggleStatusAll(e));
    console.log("Toggled!");
  }, []);
  const handleDelete = (item) => {
    store.dispatch(removeTodo(item));
  };
  const handleChangeStatus = (item) => {
    store.dispatch(changeTodoStatus(item));
  };
  const handleEditRequest = (item) => {
    inputRef.current.focus();
    inputRef.current.value = item.name;
    editId.current = item.id;
  };
  const clearCompleted = () => {
    store.dispatch(removeCompletedTodo());
  };
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
          onSubmit={addEditToList}
          placeholder="What needs to be done?"
          inputRef={inputRef}
          editRef={editRef}
        />
        <ArrowDown onClick={toggleCompleted} />
      </Suspense>
      <List
        list={todoList}
        filter={filter}
        statusHandler={handleChangeStatus}
        editTodoHandler={handleEditRequest}
        deleteHandler={handleDelete}
      />
      {todoList.length !== 0 ? (
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
export { Main, delaySimulation, FILTER };
