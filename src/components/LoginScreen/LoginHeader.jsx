import React from "react";
import "./LoginHeader.css";

const LoginHeader = () => {
  return (
    <div className="loginHeader">
      <h1>Unlimited filds, TV programs and more.</h1>
      <h3>Watch anywhere. Cancel at any time</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>

      <div className="loginHeader__input">
        <form action="">
          <input type="email" placeholder="Email Address" />
          <button className="loginHeader__button">GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default LoginHeader;
