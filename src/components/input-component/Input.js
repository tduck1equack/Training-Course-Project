import React from "react";
import "../style/Input.css";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    input: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmitHandler } = this.props;
    const { input } = this.state;
    onSubmitHandler(input);
    this.setState({ input: "" });
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value,
    });
  };
  render() {
    const { placeholder, inputRef } = this.props;
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={this.handleInputChange}
          placeholder={placeholder}
          ref={inputRef}
        ></input>
      </form>
    );
  }
}
