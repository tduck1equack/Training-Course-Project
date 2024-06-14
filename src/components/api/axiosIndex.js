import axios from "axios";

const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/";

const todoAPI = axios.create({
  baseURL: endpoint,
});

const loadTodoAPI = async () => {
  const response = await todoAPI.get("todoList");
  return response.data;
};

export { todoAPI, loadTodoAPI };
