import React from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";

import "../style/Item.css";
export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onDoubleClick={this.props.onDBClickHandler}
        className={this.props.status ? "item completed" : "item"}
      >
        <Checkbox
          checked={this.props.status}
          onChangeHandler={this.props.onChangeStatusHandler}
          onClickHandler={this.props.onClickHandler}
        />
        <div className="item-name">{this.props.name}</div>

        <Button name="Edit" onClick={this.props.handleEditTodo} />
      </div>
    );
  }
}
