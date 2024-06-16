import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { todoReducer } from "./todoReducer";
import { rootSaga } from "./saga/todoMiddlewares";

const initialStore = {
  todoList: [],
  editId: null,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  initialStore,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
