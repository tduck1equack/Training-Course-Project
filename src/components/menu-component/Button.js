import React from "react";
import "../style/Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={this.props.special}
        style={this.props.style}
      >
        {this.props.name}
      </button>
    );
  }
}
