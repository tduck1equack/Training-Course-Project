import React from "react";
import "./style/Input.css";
class Input extends React.Component {
  state = {
    todo: "",
    todoList: [],
    count: 0,
  };
  handleInputChange = (e) => {
    if (e.target.value !== undefined) {
      this.setState({
        todo: e.target.value,
      });
    }
    console.log(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (this.state.todo != undefined) {
      this.setState({
        todo: e.target.value,
        count: this.state.count + 1,
        todoList: [...this.state.todoList, this.state.todo],
      });
    }
    console.log(this.state.count);
    console.log(this.state.todoList);
  };
  handleCompletedChange = (e) => {
    const completedStatus = e.target.value;
    console.log(completedStatus);
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
          {this.state.todoList.map((todo) => (
            <ul className="todo-list">
              <li key={todo}>
                <input
                  className="completed"
                  type="checkbox"
                  onChange={this.handleCompletedChange}
                ></input>
                <div className="todo-items">{todo}</div>
              </li>
            </ul>
          ))}
          {this.state.count === 0 ? (
            ""
          ) : (
            <div className="menu-bar">
              <div className="count-bar">{this.state.count} items left</div>
              <div className="actions">
                <ul>
                  <li>
                    <button>All</button>
                  </li>
                  <li>
                    <button>Active</button>
                  </li>
                  <li>
                    <button>Completed</button>
                  </li>
                </ul>
                <button className="clear">Clear completed</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Input;
