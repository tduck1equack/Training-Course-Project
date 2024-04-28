import React from "react";
import Button from "../menu-component/Button";
import "../style/Menu.css";
import { FILTER } from "../Main";
import { THEME, ThemeConsumer } from "../style/theme";

const Menu = (props) => {
  const { count, clearHandler, handleFilter } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="menu">
          <span className={theme === THEME.LIGHT ? "" : "dark-count"}>
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
};
export default Menu;
