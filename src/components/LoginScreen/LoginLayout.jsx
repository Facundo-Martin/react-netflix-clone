import React from "react";
import "./LoginLayout.css";

const Login = ({ children }) => {
  return (
    <div className="login">
      <span className="login__gradient"></span>
      <div className="login__nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          className="login__logo"
        />

        <button className="login__button">Sign In</button>
      </div>
      <div className="login_children">{children}</div>
    </div>
  );
};

export default Login;
