import React from "react";
import Menu from "./input-component/Menu";
import List from "./input-component/List";
import Input from "./input-component/Input";
import ArrowDown from "./input-component/ArrowDown";
import "./style/Main.css";
class Main extends React.Component {
  state = {
    todo: "",
    edit: "",
    todoList: [],
    todoListFiltered: [],
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
            isEdited: false,
          },
        ],
        todoListFiltered: this.state.todoList,
        count: this.state.count + 1,
      });
    }

    this.setState({ todoListView: this.state.todoList, todo: "" });
    console.log(this.state.todoList);
    console.log("Count state: ", this.state.count);
    console.log("View: ", this.state.todoListFiltered);
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
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
  handleCount = (e) => {
    this.setState({
      count: e.target.checked ? this.state.count - 1 : this.state.count + 1,
    });
  };
  handleEdit = (item) => {
    this.setState({
      todoList: this.state.todoList.map((i) =>
        i.id === item.id ? { ...i, isEdited: !i.isEdited } : i
      ),
      edit: item.name,
    });
  };
  editSubmit = (item) => {
    console.log(this.state.edit);
    this.setState({
      todoList: this.state.todoList.map((i) =>
        i.isEdited
          ? { ...i, name: this.state.edit, ...i, isEdited: !i.isEdited }
          : i
      ),
      edit: "",
    });
  };
  handleEditChange = (e) => {
    this.setState({
      edit: e.target.value,
    });
  };
  clearCompleted = (e) => {
    this.setState({
      todoList: this.state.todoList.filter((i) => !i.status),
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
        <button onClick={() => console.log(this.state.todoList)}>view</button>
        <Input
          value={this.state.todo}
          onChangeHandler={this.handleInputChange}
          onSubmitHandler={this.handleSubmit}
          placeholder="What needs to be done?"
        />
        <ArrowDown />
        <List
          list={this.state.todoList}
          edit={this.state.edit}
          statusHandler={this.handleChangeStatus}
          countHandler={this.handleCount}
          editHandler={this.handleEdit}
          submitHandler={this.editSubmit}
          changeHandler={this.handleEditChange}
        />
        {this.state.todoList.length ? (
          <Menu count={this.state.count} clearHandler={this.clearCompleted} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Main;
