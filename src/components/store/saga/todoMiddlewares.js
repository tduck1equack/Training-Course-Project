import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  addTodo,
  editTodo,
  getEditId,
  loadTodo,
  removeTodo,
} from "../todoListActions";
import { ACTION_TYPE } from "../todoReducer";
import {
  addTodoAPI,
  deleteTodoAPI,
  editTodoAPI,
  loadTodoAPI,
} from "../../api/axiosIndex";

function* loadTodoSaga() {
  debugger;
  try {
    const data = yield call(loadTodoAPI);
    yield put(loadTodo(data));
    debugger;
  } catch (e) {
    console.log("Dumbass! That's a bad middleware");
  }
}
function* addTodoSaga(todo) {
  try {
    yield put(addTodo(todo));
    yield call(addTodoAPI, todo);
  } catch (e) {
    console.log(e);
  }
}
function* editTodoSaga(id, todo) {
  try {
    yield put(getEditId(id));
    yield put(editTodo(todo));
    yield call(editTodoAPI, [id, todo]);
  } catch (e) {
    console.log(e);
  }
}
function* deleteTodoSaga(todo) {
  try {
    yield put(removeTodo(todo));
    yield call(deleteTodoAPI, todo.id);
  } catch (e) {
    console.log(e);
  }
}
function* watchLoadTodoSaga() {
  debugger;
  yield takeLatest(ACTION_TYPE.LOAD_TODO.REQUEST, loadTodoSaga);
}
function* watchAddTodoSaga() {
  yield takeLatest(ACTION_TYPE.ADD_TODO, addTodoSaga);
}
function* watchEditTodoSaga() {
  yield takeLatest(ACTION_TYPE.EDIT_TODO, editTodoSaga);
}
function* watchDeleteTodoSaga() {
  yield takeLatest(ACTION_TYPE.REMOVE_TODO, deleteTodoSaga);
}
/* export function* todoSaga() {
  yield takeEvery(ACTION_TYPE.LOAD_TODO, loadTodoSaga);
  yield takeEvery(ACTION_TYPE.ADD_TODO, addTodoSaga);
  yield takeEvery(ACTION_TYPE.EDIT_TODO, editTodoSaga);
  yield takeEvery(ACTION_TYPE.REMOVE_TODO, deleteTodoSaga);
} */
export function* rootSaga() {
  debugger;
  yield all([
    watchLoadTodoSaga(),
    watchAddTodoSaga(),
    watchEditTodoSaga(),
    watchDeleteTodoSaga(),
  ]);
}
