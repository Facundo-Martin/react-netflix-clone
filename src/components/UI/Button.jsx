import React from "react";
import "./Button.css";

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children || "Click Me"}
    </button>
  );
};

export default Button;
