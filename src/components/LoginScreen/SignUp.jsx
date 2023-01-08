import React, { useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "./SignUp.css";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const auth = getAuth();

  const register = (e) => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
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
