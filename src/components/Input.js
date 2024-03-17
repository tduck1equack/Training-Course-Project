import React from "react";
import "./style/Input.css";
class Input extends React.Component {
  state = {
    todo: "",
    todoList: [],
    count: 0,
    tab: "All",
  };
  //handleCountChange(): changing count number if a task is checked or unchecked
  handleCountChange = (e) => {
    if (e.target.checked === true) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  //handleClearCompleted: filters completed tasks and removes from todoList
  handleClearCompleted = (e) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.status === false),
    });
    console.log(this.state.todoList);
  };
  //handleInputChange: enables Input and set todo to be Input value
  handleInputChange = (e) => {
    if (e.target.value !== undefined) {
      console.log("Value on input field: ", e.target.value);
      this.setState({
        todo: e.target.value,
      });
    }
  };
  //handleSubmit: Submit behavior: prevent page reloading, set Input to blank after submitting,
  //              incrementing count and add task to todoList with default status as false
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo !== "") {
      this.setState({
        todo: "",
        count: this.state.count + 1,
        todoList: [
          ...this.state.todoList,
          { item: this.state.todo, status: false },
        ],
      });
    }
    console.log("State count: ", this.state.count);
    console.log("State array: ", this.state.todoList);
  };
  //showAll, showActive, showCompleted: set state 'tab' for conditional rendering
  showAll = (e) => {
    this.setState({
      tab: "All",
    });
    console.log(this.state.tab);
    console.log(this.state.todoList);
  };
  showActive = (e) => {
    this.setState({
      tab: "Active",
    });
  };
  showCompleted = (e) => {
    this.setState({
      tab: "Completed",
    });
  };
  render() {
    return (
      <div className="form-field">
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              className="input-field"
              placeholder="What needs to be done?"
              onChange={this.handleInputChange}
              value={this.state.todo}
            ></input>
          </div>
        </form>
        <div className="output-field">
          {this.state.tab === "All"
            ? this.state.todoList.map((todo) => (
                <ul className="todo-list">
                  <li key={todo.item} class="completed">
                    <input
                      className="checkbox"
                      type="checkbox"
                      onChange={(e) => {
                        todo.status = e.target.checked;
                      }}
                      onClick={this.handleCountChange}
                      checked={todo.status}
                    ></input>
                    <div
                      className="todo-items"
                      style={
                        todo.status === true
                          ? { textDecoration: "line-through" }
                          : {}
                      }
                    >
                      {todo.item}
                    </div>
                  </li>
                </ul>
              ))
            : this.state.tab === "Active"
            ? this.state.todoList.map((todo) => {
                if (todo.status === false) {
                  return (
                    <ul className="todo-list">
                      <li key={todo.item} class="completed">
                        <input
                          className="checkbox"
                          type="checkbox"
                          onChange={(e) => {
                            todo.status = e.target.checked;
                          }}
                          onClick={this.handleCountChange}
                          checked={todo.status}
                        ></input>
                        <div
                          className="todo-items"
                          style={
                            todo.status === true
                              ? { textDecoration: "line-through" }
                              : {}
                          }
                        >
                          {todo.item}
                        </div>
                      </li>
                    </ul>
                  );
                }
              })
            : this.state.todoList.map((todo) => {
                if (todo.status === true) {
                  return (
                    <ul className="todo-list">
                      <li key={todo.item} class="completed">
                        <input
                          className="checkbox"
                          type="checkbox"
                          onChange={(e) => {
                            todo.status = e.target.checked;
                          }}
                          onClick={this.handleCountChange}
                          checked={todo.status}
                        ></input>
                        <div
                          className="todo-items"
                          style={
                            todo.status === true
                              ? { textDecoration: "line-through" }
                              : {}
                          }
                        >
                          {todo.item}
                        </div>
                      </li>
                    </ul>
                  );
                }
              })}
          {this.state.todoList.length === 0 ? (
            ""
          ) : (
            <div className="menu-bar">
              <div className="count-bar">{this.state.count} items left</div>
              <div className="actions">
                <ul>
                  <li>
                    <button onClick={this.showAll}>All</button>
                  </li>
                  <li>
                    <button onClick={this.showActive}>Active</button>
                  </li>
                  <li>
                    <button onClick={this.showCompleted}>Completed</button>
                  </li>
                </ul>
                <button className="clear" onClick={this.handleClearCompleted}>
                  Clear completed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Input;
