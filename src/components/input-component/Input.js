import React from "react";
import "../style/Input.css";
import { ThemeConsumer, ThemeContext } from "../style/theme";
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
    const { theme } = this.context;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={this.handleInputChange}
              placeholder={placeholder}
              ref={inputRef}
              style={{
                backgroundColor: theme.secondary,
                color: theme.textColor,
              }}
            ></input>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}
Input.contextType = ThemeContext;
