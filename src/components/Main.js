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
    this.edit = false;
  }
  state = {
    todoList: [],
    todoListFiltered: [],
    count: 0,
    editId: 0,
  };
  enableEditSubmit = () => {
    this.edit = true;
  };
  disableEditSubmit = () => {
    this.edit = false;
  };
  addEditToList = (item) => {
    const { count, todoList } = this.state;
    if (this.edit) {
      this.setState({
        todoList: todoList.map((i) =>
          i.id === this.state.editId ? { ...i, name: item } : i
        ),
      });
      this.disableEditSubmit();
    } else {
      if (item.length > 1) {
        this.setState({
          todoList: [
            ...todoList,
            {
              id: todoList.length + 1,
              name: item,
              status: false,
              isEdited: false,
            },
          ],
          count: count + 1,
        });
      }
    }
    console.log("Count state: ", count);
    console.log("List state: ", todoList);
  };

  handleChangeStatus = (item) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.map((i) =>
        i.id === item.id ? { ...i, status: !i.status } : i
      ),
    });
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
    });
    if (!item.status) {
      this.setState({
        count: count - 1,
      });
    }
  };
  handleEdit = (item) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.map((i) =>
        i.id === item.id ? { ...i, isEdited: !i.isEdited } : i
      ),
    });
  };

  handleEditChange = (e) => {
    this.setState({
      edit: e.target.value,
    });
  };
  clearCompleted = (e) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((i) => !i.status),
    });
  };
  handleEditRequest = (item) => {
    console.log("Done");
    console.log("inputRef: ", this.inputRef);
    this.enableEditSubmit();
    this.inputRef.current.focus();
    this.inputRef.current.value = item.name;
    this.setState({
      editId: item.id,
    });
    console.log("Target: ", item);
    console.log("Edit: ", this.edit);
    console.log("Editing item with id: ", item.id);
    console.log("Stored ID: ", this.state.editId);
  };

  render() {
    let view = this.state.todoList;
    const viewAll = () => {
      view = this.state.todoList;
      console.log(view === this.state.todoList);
    };
    const viewActive = () => {
      view = this.state.todoList.filter((i) => !i.status);
      console.log("Active filtered. View: ", view);
      console.log(view === this.state.todoList);
    };
    const viewCompleted = () => {
      view = this.state.todoList.filter((i) => i.status);
    };
    return (
      <div className="input-wrapper">
        <Input
          onChangeHandler={this.handleInputChange}
          onSubmitHandler={this.addEditToList}
          placeholder="What needs to be done?"
          inputRef={this.inputRef}
        />
        <ArrowDown onClick={this.toggleCompleted} />
        <List
          list={view}
          statusHandler={this.handleChangeStatus}
          countHandler={this.handleCount}
          submitHandler={this.editSubmit}
          changeHandler={this.handleEditChange}
          editTodoHandler={this.handleEditRequest}
          deleteHandler={this.handleDelete}
        />
        {this.state.todoList.length ? (
          <Menu
            count={this.state.count}
            viewAll={viewAll}
            viewActive={viewActive}
            viewCompleted={viewCompleted}
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
