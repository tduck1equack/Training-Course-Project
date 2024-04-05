import React from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count, clearHandler, viewAll, viewActive, viewCompleted } =
      this.props;
    return (
      <div className="menu">
        <span>
          {count} item{count <= 1 ? "" : "s"} left!
        </span>
        <div className="button-menu">
          <div className="center-menu">
            <Button name="All" onClick={viewAll} />
            <Button name="Active" onClick={viewActive} />
            <Button name="Completed" onClick={viewCompleted} />
          </div>
          <Button
            onClick={clearHandler}
            name="Clear Completed"
            special="secondary"
          />
        </div>
      </div>
    );
  }
}
