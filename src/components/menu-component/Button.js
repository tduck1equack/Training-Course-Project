import React from "react";
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
