import axios from "axios";
import { ACTION_TYPE } from "./todoReducer";

const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/todoList";

export const loadAPI = (store) => (next) => (action) => {
  next(action);
  if (action.type === ACTION_TYPE.LOAD_TODO) {
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data);
        next(res.data);
        console.log("Succeeded!");
      })
      .catch((err) => console.log("Error! " + err));
  }
};

export const postAPI = store => next => action => {
    
}