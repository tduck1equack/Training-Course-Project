import React from "react";
import PropTypes from "prop-types";
import "../style/Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, special, style, name } = this.props;
    return (
      <button onClick={onClick} className={special} style={style}>
        {name}
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  special: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps = {
  name: "Button Sample",
};
