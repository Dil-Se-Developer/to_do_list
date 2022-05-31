import React from "react";
import "./Button.css";

const Button = (props) => {
  let { btnName, btnHandler } = props;
  return <button onClick={btnHandler}>{btnName}</button>;
};

export default Button;
