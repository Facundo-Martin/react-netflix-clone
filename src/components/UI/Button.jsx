import React from "react";
import "./Button.css";

const Button = ({ children }) => {
  return <button className="button">{children || "Click Me"}</button>;
};

export default Button;
