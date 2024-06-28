import { ACTION_TYPE } from "./todoReducer";

export const loadTodo = (data) => {
  return {
    type: ACTION_TYPE.LOAD_TODO.SUCCESS,
    payload: data,
  };
};

export const addTodoAction = (name) => {
  return {
    type: ACTION_TYPE.ADD_TODO.REQUEST,
    payload: name,
  };
};
export const addTodo = (name) => {
  return {
    type: ACTION_TYPE.ADD_TODO.SUCCESS,
    payload: name,
  };
};
export const editTodoAction = (name) => {
  return {
    type: ACTION_TYPE.EDIT_TODO.REQUEST,
    payload: name,
  };
};
export const editTodo = (name) => {
  return {
    type: ACTION_TYPE.EDIT_TODO.SUCCESS,
    payload: name,
  };
};
export const removeTodoAction = (todo) => {
  return {
    type: ACTION_TYPE.REMOVE_TODO.REQUEST,
    payload: todo,
  };
};
export const removeTodo = (todo) => {
  return {
    type: ACTION_TYPE.REMOVE_TODO.SUCCESS,
    payload: todo,
  };
};

export const removeCompletedTodo = () => {
  return {
    type: ACTION_TYPE.REMOVE_TODO_COMPLETED.SUCCESS,
  };
};

export const changeTodoStatus = (todo) => {
  return {
    type: ACTION_TYPE.CHANGE_TODO_STATUS.SUCCESS,
    payload: todo,
  };
};

export const toggleStatusAll = (event) => {
  return {
    type: ACTION_TYPE.TOGGLE_STATUS_ALL.SUCCESS,
    payload: event,
  };
};

export const getEditId = (todo) => {
  return {
    type: ACTION_TYPE.GET_EDIT_ID,
    payload: todo,
  };
};
