import React from "react";
import PropTypes from "prop-types";
import "../style/Button.css";
import { ThemeConsumer, ThemeContext } from "../style/theme";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, special, style, name } = this.props;
    const { theme } = this.context;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <button
            onClick={onClick}
            className={special}
            style={style ? style : { backgroundColor: theme.button }}
          >
            {name}
          </button>
        )}
      </ThemeConsumer>
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
Button.contextType = ThemeContext;
