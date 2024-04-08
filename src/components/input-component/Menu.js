import React from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
import { FILTER } from "../Main";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count, clearHandler, handleFilter } = this.props;
    return (
      <div className="menu">
        <span>
          {count} item{count <= 1 ? "" : "s"} left!
        </span>
        <div className="button-menu">
          <div className="center-menu">
            <Button name="All" onClick={() => handleFilter(FILTER.ALL)} />
            <Button name="Active" onClick={() => handleFilter(FILTER.ACTIVE)} />
            <Button
              name="Completed"
              onClick={() => handleFilter(FILTER.COMPLETED)}
            />
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
