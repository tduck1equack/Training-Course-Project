import React from "react";
import { createPortal } from "react-dom";

const Error = () => {
  return createPortal(<p>Something went wrong...</p>, document.body);
};

export default Error;
