import React from "react";

const Checkbox = (props) => {
  const { checked, onClickHandler, onChangeHandler } = props;

  console.log(`Component: Checkboxes`);

  return (
    <input
      type="checkbox"
      checked={checked}
      onClick={onClickHandler}
      onChange={onChangeHandler}
    ></input>
  );
};
export default Checkbox;
