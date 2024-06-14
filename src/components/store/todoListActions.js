import { ACTION_TYPE } from "./todoReducer";

export const loadTodo = () => {
  return {
    type: ACTION_TYPE.LOAD_TODO,
  };
};

export const addTodo = (name) => {
  return {
    type: ACTION_TYPE.ADD_TODO,
    payload: name,
  };
};

export const editTodo = (name) => {
  return {
    type: ACTION_TYPE.EDIT_TODO,
    payload: name,
  };
};

export const removeTodo = (todo) => {
  return {
    type: ACTION_TYPE.REMOVE_TODO,
    payload: todo,
  };
};

export const removeCompletedTodo = () => {
  return {
    type: ACTION_TYPE.REMOVE_TODO_COMPLETED,
  };
};

export const changeTodoStatus = (todo) => {
  return {
    type: ACTION_TYPE.CHANGE_TODO_STATUS,
    payload: todo,
  };
};

export const toggleStatusAll = (event) => {
  return {
    type: ACTION_TYPE.TOGGLE_STATUS_ALL,
    payload: event,
  };
};

export const getEditId = (todo) => {
  return {
    type: ACTION_TYPE.GET_EDIT_ID,
    payload: todo,
  };
};
