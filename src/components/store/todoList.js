import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import createSagaMiddleware from "redux-saga";

import { todoReducer } from "./todoReducer";
import { todoSaga } from "./saga/todoMiddlewares";

const initialStore = {
  todoList: [],
  editId: null,
};

const sagaMiddleware = createSagaMiddleware();

const todoList = createStore(
  todoReducer,
  initialStore,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default todoList;
