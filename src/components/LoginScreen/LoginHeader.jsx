import React from "react";
import Button from "../UI/Button";
import "./LoginHeader.css";

const LoginHeader = ({ setSignIn }) => {
  return (
    <div className="loginHeader">
      <h1>Unlimited films, TV programs and more.</h1>
      <h3>Watch anywhere. Cancel at any time</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>

      <div className="loginHeader__input">
        <form action="">
          <input type="email" placeholder="Email Address" />
          <Button onClick={() => setSignIn(true)}>GET STARTED</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginHeader;
