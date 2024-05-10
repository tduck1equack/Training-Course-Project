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
// import child components
// import Input from "./input-component/Input";
// import ArrowDown from "./input-component/ArrowDown";
import List from "./input-component/List";
import Menu from "./input-component/Menu";
import { Loading } from "./miscellaneous/Loading";
// stylesheet
import "./style/Main.css";

import { THEME, ThemeContext } from "./style/theme";
// dynamic import
const Input = lazy(() => delaySimulation(import("./input-component/Input")));
const ArrowDown = lazy(() =>
  delaySimulation(import("./input-component/ArrowDown"))
);
// define FILTER
const FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
// delay simulator to simulate a 2s delay
const delaySimulation = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};
//--------------reducers----------------
// reducer for todoList
/* const todoListReducer = produce((state, action) => {
  const { type, todo, name, id, event } = action;
  const { todoList } = state;
  switch (type) {
    case "add":
        const newTodo = {
          id: draft.length + 1,
          name: name,
          status: false,
        };
        draft.push(newTodo);
      break;

    case "edit":
      return todoList.map((i) =>
        i.id === id ? { ...i, name: name } : i
      ); /* setTodoList(
          todoList.map((i) =>
            i.id === editId.current ? { ...i, name: item } : i
          )
        ); */
/* case "toggleStatus":
      return todoList.map((i) => ({ ...i, status: event.target.checked }));
    case "changeStatus":
      return produce((draft) => {
        const changedStatusTodo = draft[todo.id - 1];
        changedStatusTodo.status = !changedStatusTodo.status;
      });
    case "delete":
      return todoList.filter((i) => i.id !== todo.id);
    case "deleteCompleted":
      return todoList.filter((i) => !i.status);
    default:
      break;
  }
}); */

// actual Main component
const Main = () => {
  // const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(FILTER.ALL);
  const inputRef = useRef(null);
  const editRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [state, todoListDispatch] = useReducer(
    produce((draft, action) => {
      const { todoList } = draft;
      const { type, todo, name, id, event } = action;
      switch (type) {
        case "add":
          const newTodo = {
            id: todoList.length + 1,
            name: name,
            status: false,
          };
          todoList.push(newTodo);
          break;
        case "edit":
          todoList[id - 1].name = name;
          break;
        case "changeStatus":
          todoList[todo.id - 1].status = !todoList[todo.id - 1].status;
          break;
        case "delete":
          console.log(todo.id);
          console.log(todoList);
          todoList.filter((i) => i.id !== todo.id);
          break;
        case "deleteCompleted":
          todoList.filter((i) => !i.status);
          break;
        case "toggleStatusAll":
          todoList.map((i) => (i.status = event.target.checked));
          break;
        default:
          throw Error("Unknown action: " + action.type);
      }
    }),
    {
      todoList: [],
    }
  );
  let editId = useRef(null);
  let count = state.todoList.filter((i) => !i.status).length;

  console.log(`Component: Main - ${count} todos`);
  console.log(state.todoList);
  const addEditToList = useCallback(
    (item) => {
      if (editId.current) {
        todoListDispatch({ type: "edit", name: item, id: editId.current });
        editId.current = null;
      } else {
        if (item.length > 1) {
          todoListDispatch({ type: "add", name: item });
        }
      }
    },
    [state.todoList]
  );
  const toggleCompleted = (e) => {
    todoListDispatch({ type: "toggleStatusAll", event: e });
    console.log("Toggled!");
  };
  const handleDelete = (item) => {
    // setTodoList(todoList.filter((i) => i.id !== item.id));
    // setTodoList(todoList.filter((i) => !i.status));
    todoListDispatch({ type: "delete", todo: item });
  };
  const handleChangeStatus = (item) => {
    todoListDispatch({ type: "changeStatus", todo: item });
  };
  const handleEditRequest = (item) => {
    inputRef.current.focus();
    console.log(inputRef);
    console.log(editRef);
    inputRef.current.value = item.name;
    editId.current = item.id;
  };
  const clearCompleted = (e) => {
    // setTodoList(todoList.filter((i) => !i.status));
    todoListDispatch({ type: "deleteCompleted" });
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
        list={state.todoList}
        filter={filter}
        statusHandler={handleChangeStatus}
        editTodoHandler={handleEditRequest}
        deleteHandler={handleDelete}
      />
      {state.todoList.length !== 0 ? (
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
