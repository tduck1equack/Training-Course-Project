import React from "react";
import Checkbox from "./Checkbox";
import Button from "../menu-component/Button";
import { PropTypes } from "prop-types";
import "../style/Item.css";
import { ThemeConsumer, ThemeContext } from "../style/theme";
export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      item,
      onChangeStatusHandler,
      onClickHandler,
      handleDelete,
      handleEditTodo,
    } = this.props;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div
            className={item.status ? "item completed" : "item"}
            style={{
              color: theme.textColor,
              background: theme.secondary,
              transition: "all 0.5s ease",
            }}
          >
            <Checkbox
              checked={item.status}
              onChangeHandler={onChangeStatusHandler}
              onClickHandler={() => onClickHandler(item)}
            />
            <div className="item-name">{item.name}</div>

            <div className="side-menu">
              <Button name="Edit" onClick={() => handleEditTodo(item)} />
              <Button name="Delete" onClick={() => handleDelete(item)} />
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
Item.propTypes = {
  name: PropTypes.string,
  onClickHandler: PropTypes.func,
  onChangeStatusHandler: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleDelete: PropTypes.func,
};
Item.contextType = ThemeContext;
