import React from "react";
import "../style/ArrowDown.css";
export default class ArrowDown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="absolute-container">
        <div className="down-button">
          <input type="checkbox" onClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}
