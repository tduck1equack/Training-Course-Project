import React from "react";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked}
        onClick={this.props.onClickHandler}
      ></input>
    );
  }
}
