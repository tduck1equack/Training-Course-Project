import React, { useState } from "react";

const Checkbox = (props) => {
  const { checked, onClickHandler } = props;
  const [value, setValue] = useState(checked);
  const handleChange = (e) => {
    setValue(e.target.checked);
  };
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={handleChange}
      onClick={onClickHandler}
    ></input>
  );
};
export default Checkbox;
