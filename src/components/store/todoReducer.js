import axios from "axios";
import { produce } from "immer";
import { todoAPI } from "../api/axiosIndex";

const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/todoList";

const ACTION_TYPE = {
  LOAD_TODO: "todoList/addTodo",
  ADD_TODO: "todoList/addTodo",
  EDIT_TODO: "todoList/editTodo",
  REMOVE_TODO: "todoList/removeTodo",
  REMOVE_TODO_COMPLETED: "todoList/removeTodoCompleted",
  CHANGE_TODO_STATUS: "todoList/changeStatus",
  TOGGLE_STATUS_ALL: "todoList/toggleStatusAll",
  GET_EDIT_ID: "todoList/getEditId",
};

const todoReducer = (state, action) => {
  const { type, payload } = action;
  const { todoList, editId } = state;
  switch (type) {
    case ACTION_TYPE.LOAD_TODO:
      
      return {
        ...state,
        todoList: [...todoList, ...payload],
      };
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
          i.id === editId ? { ...i, name: payload } : i
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
    case ACTION_TYPE.GET_EDIT_ID:
      return {
        ...state,
        editId: payload.id,
      };
    default:
      return state;
  }
};

export { todoReducer, ACTION_TYPE };
