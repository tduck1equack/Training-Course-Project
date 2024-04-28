import React from "react";
import "../style/ArrowDown.css";

const ArrowDown = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute-container">
      <div className="down-button">
        <input type="checkbox" onClick={onClick} />
      </div>
    </div>
  );
};
export default ArrowDown;
