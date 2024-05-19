import React from "react";
import { produce } from "immer";
import { createStore } from "redux";
import { addTodo } from "./todoListActions";

const ACTION_TYPE = {
  ADD_TODO: "todoList/addTodo",
  EDIT_TODO: "todoList/editTodo",
  REMOVE_TODO: "todoList/removeTodo",
  REMOVE_TODO_COMPLETED: "todoList/removeTodoCompleted",
  CHANGE_TODO_STATUS: "todoList/changeStatus",
  TOGGLE_STATUS_ALL: "todoList/toggleStatusAll",
};

const initialStore = {
  todoList: [],
};
/*
Payload example:

payload = {
    name: string,
    todo: object,
    id: number,
    event: event
    filter: FILTER.<string>
    viewMode: VIEWMODE.<string>
}
*/
const rootReducer = (state, action) => {
  const { type, payload } = action;
  const { todoList } = state;
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...todoList,
          { id: todoList.length + 1, name: payload, status: false },
        ],
      };
    case ACTION_TYPE.EDIT_TODO:
      return {
        ...state,
        todoList: todoList.map((i) =>
          i.id === payload.id ? { ...i, name: payload.name } : i
        ),
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: todoList.filter((i) => i.id !== payload.id),
      };
    case ACTION_TYPE.REMOVE_TODO_COMPLETED:
      return {
        ...state,
        todoList: todoList.filter((i) => !i.status),
      };
    case ACTION_TYPE.CHANGE_TODO_STATUS:
      return {
        ...state,
        todoList: todoList.map((i) =>
          i.id === payload.id ? { ...i, status: !i.status } : i
        ),
      };
    case ACTION_TYPE.TOGGLE_STATUS_ALL:
      return {
        ...state,
        todoList: todoList.map((i) => {
          return { ...i, status: payload.target.checked };
        }),
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer, initialStore);

export { store, ACTION_TYPE };
