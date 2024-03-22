import React from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <span>
          {this.props.count} item{this.props.count === 1 ? "" : "s"} left!
        </span>
        <div className="button-menu">
          <div className="center-menu">
            <Button name="All" />
            <Button name="Active" />
            <Button name="Completed" />
          </div>
          <Button name="Clear Completed" special="secondary" />
        </div>
      </div>
    );
  }
}
