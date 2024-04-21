import React from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
import { FILTER } from "../Main";
import { ThemeContext, ThemeConsumer } from "../style/theme";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count, clearHandler, handleFilter } = this.props;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className="menu">
            <span
              style={{ color: theme.textColor, transition: "all 0.5s ease" }}
            >
              {count} item{count <= 1 ? "" : "s"} left!
            </span>
            <div className="button-menu">
              <div className="center-menu">
                <Button name="All" onClick={() => handleFilter(FILTER.ALL)} />
                <Button
                  name="Active"
                  onClick={() => handleFilter(FILTER.ACTIVE)}
                />
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
        )}
      </ThemeConsumer>
    );
  }
}
Menu.contextType = ThemeContext;
