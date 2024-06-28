import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  addTodo,
  changeTodoStatus,
  editTodo,
  getEditId,
  loadTodo,
  removeCompletedTodo,
  removeTodo,
} from "../todoListActions";
import { ACTION_TYPE } from "../todoReducer";
import {
  addTodoAPI,
  deleteTodoAPI,
  editTodoAPI,
  loadTodoAPI,
  changeTodoStatusAPI,
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
function* changeTodoStatusSaga(todo) {
  try {
    yield put(changeTodoStatus(todo));
    yield call(changeTodoStatusAPI, todo.id);
  } catch (e) {
    console.log(e);
  }
}
function* deleteCompletedTodoSaga() {
  try {
    yield put(removeCompletedTodo());
    yield call();
  } catch (e) {
    console.log(e);
  }
}
function* watchLoadTodoSaga() {
  debugger;
  yield takeLatest(ACTION_TYPE.LOAD_TODO.REQUEST, loadTodoSaga);
}
function* watchAddTodoSaga() {
  yield takeLatest(ACTION_TYPE.ADD_TODO.REQUEST, addTodoSaga);
}
function* watchEditTodoSaga() {
  yield takeLatest(ACTION_TYPE.EDIT_TODO.REQUEST, editTodoSaga);
}
function* watchDeleteTodoSaga() {
  yield takeLatest(ACTION_TYPE.REMOVE_TODO.REQUEST, deleteTodoSaga);
}
function* watchChangeTodoStatusSaga() {
  yield takeLatest(ACTION_TYPE.CHANGE_TODO_STATUS.REQUEST, deleteTodoSaga);
}
function* watchDeleteCompletedTodoSaga() {
  yield takeLatest(
    ACTION_TYPE.REMOVE_TODO_COMPLETED.REQUEST,
    deleteCompletedTodoSaga
  );
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
    watchChangeTodoStatusSaga(),
  ]);
}
