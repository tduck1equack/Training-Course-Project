const ACTION_TYPE = {
  LOAD_TODO: {
    REQUEST: "todoList/loadTodoRequest",
    SUCCESS: "todoList/loadTodo",
  },
  ADD_TODO: {
    REQUEST: "todoList/addTodoRequest",
    SUCCESS: "todoList/addTodo",
  },
  EDIT_TODO: {
    REQUEST: "todoList/editTodoRequest",
    SUCCESS: "todoList/editTodo",
  },
  REMOVE_TODO: {
    REQUEST: "todoList/removeTodoRequest",
    SUCCESS: "todoList/removeTodo",
  },
  REMOVE_TODO_COMPLETED: {
    REQUEST: "todoList/removeTodoCompletedRequest",
    SUCCESS: "todoList/removeTodoCompleted",
  },
  CHANGE_TODO_STATUS: {
    REQUEST: "todoList/changeStatusRequest",
    SUCCESS: "todoList/changeStatus",
  },
  TOGGLE_STATUS_ALL: {
    REQUEST: "todoList/toggleStatusAllRequest",
    SUCCESS: "todoList/toggleStatusAll",
  },
  GET_EDIT_ID: "todoList/getEditId",
};

const todoReducer = (state, action) => {
  const { type, payload } = action;
  const { todoList, editId } = state;
  switch (type) {
    case ACTION_TYPE.LOAD_TODO.SUCCESS:
      return {
        ...state,
        todoList: [...todoList, ...payload],
      };
    case ACTION_TYPE.ADD_TODO.SUCCESS:
      console.log("adf");
      return {
        ...state,
        todoList: [
          ...todoList,
          { id: todoList.length + 1, name: payload, status: false },
        ],
      };
    case ACTION_TYPE.EDIT_TODO.SUCCESS:
      return {
        ...state,
        todoList: todoList.map((i) =>
          i.id === editId ? { ...i, name: payload } : i
        ),
      };
    case ACTION_TYPE.REMOVE_TODO.SUCCESS:
      return {
        ...state,
        todoList: todoList.filter((i) => i.id !== payload.id),
      };
    case ACTION_TYPE.REMOVE_TODO_COMPLETED.SUCCESS:
      return {
        ...state,
        todoList: todoList.filter((i) => !i.status),
      };
    case ACTION_TYPE.CHANGE_TODO_STATUS.SUCCESS:
      return {
        ...state,
        todoList: todoList.map((i) =>
          i.id === payload.id ? { ...i, status: !i.status } : i
        ),
      };
    case ACTION_TYPE.TOGGLE_STATUS_ALL.SUCCESS:
      return {
        ...state,
        todoList: todoList.map((i) => {
          return { ...i, status: payload.target.checked };
        }),
      };
    case ACTION_TYPE.GET_EDIT_ID:
      return {
        ...state,
        editId: payload.id,
      };
    default:
      return state;
  }
};

export { todoReducer, ACTION_TYPE };
