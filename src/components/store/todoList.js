import { createStore, applyMiddleware } from "redux";
import axios from "axios";

import { todoReducer } from "./todoReducer";
import { loadAPI } from "./apiMiddleware";

const initialStore = {
  todoList: [],
  editId: null,
};

const todoList = createStore(
  todoReducer,
  initialStore
  // applyMiddleware(loadAPI)
);

export default todoList;
