import { call, put, takeEvery } from "redux-saga/effects";
import {
  addTodo,
  editTodo,
  getEditId,
  loadTodo,
  removeTodo,
} from "../todoListActions";
import axios from "axios";
import { ACTION_TYPE } from "../todoReducer";
import {
  addTodoAPI,
  deleteTodoAPI,
  editTodoAPI,
  loadTodoAPI,
} from "../../api/axiosIndex";

const todoAPI = axios.create({
  baseURL: "https://6652c3c6813d78e6d6d62e09.mockapi.io/",
});

function* loadTodoSaga() {
  try {
    const data = yield call(loadTodoAPI);
    yield put(loadTodo(data));
  } catch (e) {
    console.log("Dumbass! That's a bad middleware");
  }
}
function* addTodoSaga(todo) {
  try {
    yield call(addTodoAPI, todo);
    yield put(addTodo(todo));
  } catch (e) {
    console.log(e);
  }
}
function* editTodoSaga(id, todo) {
  try {
    yield call(editTodoAPI, [id, todo]);
    yield put(getEditId(id));
    yield put(editTodo(todo));
  } catch (e) {
    console.log(e);
  }
}
function* deleteTodoSaga(todo) {
  try {
    yield call(deleteTodoAPI, todo.id);
    yield put(removeTodo(todo));
  } catch (e) {
    console.log(e);
  }
}
export function* todoSaga() {
  yield takeEvery(ACTION_TYPE.LOAD_TODO, loadTodoSaga);
  yield takeEvery(ACTION_TYPE.ADD_TODO, addTodoSaga);
  yield takeEvery(ACTION_TYPE.EDIT_TODO, editTodoSaga);
  yield takeEvery(ACTION_TYPE.REMOVE_TODO, deleteTodoSaga);
}
