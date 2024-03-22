import React from "react";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmitHandler}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChangeHandler}
        ></input>
      </form>
    );
  }
}
