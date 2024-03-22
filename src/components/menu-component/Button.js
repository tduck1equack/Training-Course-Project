import React from "react";
import "../style/Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className={this.props.special}>{this.props.name}</button>;
  }
}
