import React from "react";
import Item from "./input-component/Item";
import Menu from "./input-component/Menu";
import List from "./input-component/List";
import Input from "./input-component/Input";

import Test from "./input-component/Test";

import "./style/Main.css";
class Main extends React.Component {
  state = {
    todo: "",
    todoList: [],
    todoListView: [],
    count: 0,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length > 1) {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            id: this.state.todoList.length + 1,
            name: this.state.todo,
            status: false,
          },
        ],
        count: this.state.count + 1,
      });
    }
    this.setState({ todoListView: this.state.todoList });
    this.setState({ todoListView: this.state.todoList, todo: "" });
    console.log(this.state.todoList);
    console.log("Count state: ", this.state.count);
    console.log("View: ", this.state.todoListView);
  };
  handleInputChange = (e) => {
    if (e.target.value !== undefined) {
      this.setState({
        todo: e.target.value,
      });
    }
  };
  handleChangeStatus = (item) => {
    this.setState({
      todoList: this.state.todoList.map((i) =>
        i.id === item.id ? { ...i, status: !i.status } : i
      ),
    });
  };

  viewState = () => {
    console.log("todoList state: ", this.state.todoList);
  };
  test = (e) => {
    console.log(this.state.todoList);
    console.log("Passed");
  };
  render() {
    return (
      <div className="input-wrapper">
        <Input
          value={this.state.todo}
          onChangeHandler={this.handleInputChange}
          onSubmitHandler={this.handleSubmit}
        />
        <List
          list={this.state.todoList}
          statusHandler={this.handleChangeStatus}
        />
        <button onClick={this.viewState}>View</button>
        {this.state.count > 0 ? <Menu count={this.state.count} /> : ""}
      </div>
    );
  }
}
export default Main;