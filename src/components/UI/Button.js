import React from "react";
import "./Button.css";

const Button = (props) => {
  let { btnName, btnHandler } = props;
  // console.log(props);
  return <button onClick={btnHandler}>{btnName}</button>;
};

export default Button;
