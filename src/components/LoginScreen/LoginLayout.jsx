import React, { useState } from "react";
import "./LoginLayout.css";
import SignUp from "./SignUp";

const Login = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <span className="login__gradient"></span>
      <div className="login__nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          className="login__logo"
        />

        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="login_container">
        {signIn ? (
          <SignUp />
        ) : (
          React.Children.map(children, (child) =>
            React.cloneElement(child, { setSignIn })
          )
        )}
      </div>
    </div>
  );
};

export default Login;
