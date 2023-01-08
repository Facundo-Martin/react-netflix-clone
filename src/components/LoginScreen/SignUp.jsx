import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignUp.css";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const register = (e) => {
    e.preventDefault();
    console.log(e);

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    auth.createUserWithEmailAndPassword(email, password);
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log(e);

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="signup">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailInput} />
        <input type="password" placeholder="Password" ref={passwordInput} />
        <button type="submit">Sign In</button>
        <h4>
          New to Netflix?{" "}
          <span className="signup__span" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
