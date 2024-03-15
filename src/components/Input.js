import React from "react";
import "./style/Input.css";
class Input extends React.Component {
  state = {
    todo: "Example",
    todoList: [],
  };
  handleInputChange = (e) => {
    const newTodo = e.target.value;
    this.setState({
      todo: newTodo,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.todo);
    this.state.todoList.push(this.state.todo); //push new todo into todoList
    console.log(this.state.todoList);
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
            ></input>
          </div>
        </form>
        <div className="output-field">
          {this.state.todoList.map((todo) => (
            <ul>
              <li key={todo}>{todo}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default Input;
