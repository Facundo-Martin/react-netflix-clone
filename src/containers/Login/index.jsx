import React from "react";
import "./Index.css";

const Login = () => {
  return (
    <div
      className="login"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png",
      }}
    >
      <div className="login__gradient"></div>
      <div className="login__bg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          className="login__logo"
        />
        <button className="login__button">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
