import { createStore } from "redux";
import { todoReducer } from "./todoReducer";

const initialStore = {
  todoList: [],
  editId: null,
};

const todoList = createStore(todoReducer, initialStore);

export default todoList;
