import axios from "axios";
import store from "../store/store";
const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/";

const todoAPI = axios.create({
  baseURL: endpoint,
});

const loadTodoAPI = async () => {
  const response = await todoAPI.get("todoList");
  return response.data;
};
const addTodoAPI = async (value) => {
  const response = await todoAPI.post("todoList", {
    name: value,
    id: store.todoList.length + 1,
    status: false,
  });
  return response;
};
const editTodoAPI = async (id, todo) => {
  const response = await todoAPI.put(`todoList/${id}`, { name: todo });
  return response;
};
const deleteTodoAPI = async (id) => {
  const response = await todoAPI.delete(`todoList/${id}`);
  return response;
};
export { todoAPI, loadTodoAPI, addTodoAPI, editTodoAPI, deleteTodoAPI };
