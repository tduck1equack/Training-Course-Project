import React from "react";
import PropTypes from "prop-types";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked}
        onClick={this.props.onClickHandler}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClickHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
};
