import axios from "axios";

const endpoint = "https://6652c3c6813d78e6d6d62e09.mockapi.io/todoList";

export const data = axios
  .get(endpoint)
  .then((res) => {
    console.log(res.data);
    data = res.data;
    console.log("The data obtained: " + data);
  })
  .catch((err) => console.log(err));
