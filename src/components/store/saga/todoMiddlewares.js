import { call, put, takeEvery } from "redux-saga/effects";
import { loadTodo } from "../todoListActions";
import axios from "axios";
import { ACTION_TYPE } from "../todoReducer";
import { loadTodoAPI } from "../../api/axiosIndex";

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

export function* todoSaga() {
  yield takeEvery(ACTION_TYPE.LOAD_TODO, loadTodoSaga);
}
