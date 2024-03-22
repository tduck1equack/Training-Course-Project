import React from "react";
import Button from "../menu-component/Button";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>
          {this.props.count} item{this.props.count === 1 ? "" : "s"} left!
        </span>
        <div>
          <Button type="All" />
          <Button type="Active" />
          <Button type="Completed" />
        </div>
        <Button type="Clear Completed" />
      </div>
    );
  }
}
