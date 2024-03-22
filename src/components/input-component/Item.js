import React from "react";
import "../style/Item.css";
export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.completed ? "item completed" : "item"}>
        {this.props.name}
      </div>
    );
  }
}
