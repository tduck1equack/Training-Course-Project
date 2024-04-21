import React from "react";
import { produce } from "immer";
import Menu from "./input-component/Menu";
import List from "./input-component/List";
import Input from "./input-component/Input";
import ArrowDown from "./input-component/ArrowDown";
import HOCButton from "./menu-component/HOCButton";
import "./style/Main.css";
import { ThemeContext, ThemeConsumer } from "./style/theme";
export const FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
class Main extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.editId = null;
  }
  state = {
    todoList: [],
    filter: FILTER.ALL,
    view: [],
    count: 0,
  };
  addEditToList = (item) => {
    const { todoList } = this.state;
    if (this.editId) {
      this.setState(
        /*  produce((draft) => {
          // const todo = draft.todoList[this.editId - 1];
          draft.count = draft.count + 1;
          console.log(draft.todoList);
        }) */
        {
          todoList: todoList.map((i) =>
            i.id === this.editId ? { ...i, name: item } : i
          ),
        }
      );
      this.editId = null;
    } else {
      if (item.length > 1) {
        this.setState(
          produce((draft) => {
            const todo = { id: todoList.length + 1, name: item, status: false };
            draft.todoList.push(todo);
            draft.count = draft.count + 1;
          })
        );
      }
    }
  };

  handleChangeStatus = (item) => {
    this.setState(
      produce((draft) => {
        const todo = draft.todoList[item.id - 1];
        todo.status = !todo.status;
      })
    );
  };
  //setting toggleCompleted like this so this event handler
  //doesn't just flip todos' status
  //but rather change them all to status true or false
  toggleCompleted = (e) => {
    const { todoList } = this.state;
    if (e.target.checked) {
      this.setState({
        todoList: todoList.map((i) => ({
          ...i,
          status: true,
        })),
        count: 0,
      });
    } else {
      this.setState({
        todoList: todoList.map((i) => ({
          ...i,
          status: false,
        })),
        count: todoList.length,
      });
    }
    console.log("Toggled!");
  };
  handleCount = (e) => {
    const { count } = this.state;
    this.setState({
      count: e.target.checked ? count - 1 : count + 1,
    });
  };
  handleDelete = (item) => {
    const { todoList, count } = this.state;
    this.setState({
      todoList: todoList.filter((i) => i.id !== item.id),
      count: !item.status ? count - 1 : count,
    });
  };
  clearCompleted = (e) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((i) => !i.status),
    });
  };
  handleEditRequest = (item) => {
    this.inputRef.current.focus();
    this.inputRef.current.value = item.name;
    this.editId = item.id;
  };
  handleFilter = (filter) => {
    this.setState({ filter });
    console.log(filter);
  };
  render() {
    const { todoList, filter, count } = this.state;
    const { theme } = this.context;
    let view = todoList;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div
            className="input-wrapper"
            style={{ backgroundColor: theme.secondary }}
          >
            <Input
              onChangeHandler={this.handleInputChange}
              onSubmitHandler={this.addEditToList}
              placeholder="What needs to be done?"
              inputRef={this.inputRef}
            />
            <ArrowDown onClick={this.toggleCompleted} />
            <List
              list={view}
              filter={filter}
              filterOptions={FILTER}
              statusHandler={this.handleChangeStatus}
              countHandler={this.handleCount}
              submitHandler={this.editSubmit}
              changeHandler={this.handleEditChange}
              editTodoHandler={this.handleEditRequest}
              deleteHandler={this.handleDelete}
            />
            {this.state.todoList.length ? (
              <Menu
                count={count}
                handleFilter={this.handleFilter}
                clearHandler={this.clearCompleted}
                filterOptions={FILTER}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

Main.contextType = ThemeContext;
export default Main;
