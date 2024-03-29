import React from "react";
import Menu from "./input-component/Menu";
import List from "./input-component/List";
import Input from "./input-component/Input";
import ArrowDown from "./input-component/ArrowDown";
import "./style/Main.css";
class Main extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
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
        todoListFiltered: [
          ...this.state.todoList,
          {
            id: this.state.todoList.length + 1,
            name: this.state.todo,
            status: false,
            isEdited: false,
          },
        ],
        count: this.state.count + 1,
      });
    }
    this.setState({ todoListFiltered: this.state.todoList, todo: "" });
    console.log("Count state: ", this.state.count);
    console.log("List state: ", this.state.todoList);
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
  //setting toggleCompleted like this so this event handler
  //doesn't just flip todos' status
  //but rather change them all to status true or false
  toggleCompleted = (e) => {
    if (e.target.checked) {
      this.setState({
        todoList: this.state.todoList.map((i) => ({
          ...i,
          status: true,
        })),
      });
    } else {
      this.setState({
        todoList: this.state.todoList.map((i) => ({
          ...i,
          status: false,
        })),
      });
    }
    console.log("Toggled!");
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
  testFocus = (e) => {
    console.log("Done");
    this.inputRef.current.focusTextInput();
    console.log("inputRef: ", this.inputRef);
  };
  render() {
    let view = this.state.todoList;
    const viewAll = () => {
      view = this.state.todoList;
    };
    const viewActive = () => {
      view = this.state.todoList.filter((i) => i.status === false);
      console.log("Active filtered");
    };
    const viewCompleted = () => {
      view = this.state.todoList.filter((i) => i.status);
    };
    return (
      <div className="input-wrapper">
        <button onClick={() => console.log("View variable: ", view)}>
          view
        </button>
        <button onClick={viewAll}>test All</button>
        <button onClick={viewActive}>test Active</button>
        <button onClick={this.testFocus}>test Focus</button>
        <Input
          value={this.state.todo}
          onChangeHandler={this.handleInputChange}
          onSubmitHandler={this.handleSubmit}
          placeholder="What needs to be done?"
          ref={this.inputRef}
        />
        <ArrowDown onClick={this.toggleCompleted} />
        <List
          list={view}
          edit={this.state.edit}
          statusHandler={this.handleChangeStatus}
          countHandler={this.handleCount}
          editHandler={this.handleEdit}
          submitHandler={this.editSubmit}
          changeHandler={this.handleEditChange}
        />
        {this.state.todoList.length ? (
          <Menu
            count={this.state.count}
            viewAll={this.viewAll}
            viewActive={this.viewActive}
            viewCompleted={this.viewCompleted}
            clearHandler={this.clearCompleted}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Main;
