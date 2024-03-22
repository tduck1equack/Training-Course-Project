import React from "react";
import downArrow from "../../assets/down-arrow.png";
import "../style/ArrowDown.css";
export default class ArrowDown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="absolute-container">
        <div className="down-button">
          <img
            className="icon"
            src={downArrow}
            alt={this.props.alt}
            width="25"
            height="25"
          ></img>
        </div>
      </div>
    );
  }
}
