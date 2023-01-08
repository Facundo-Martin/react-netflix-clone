import React from "react";
import { auth } from "../../firebase";
import useUser from "../../hooks/useUser";
import Button from "../UI/Button";

import "./ProfileHero.css";

const ProfileHero = () => {
  const user = useUser();
  const signOut = () => {
    console.log("signing out", auth, auth.signOut);
    auth.signOut();
  };
  console.log(user, "User");

  return (
    <div className="profilehero">
      <h1>Edit Profile</h1>
      <div className="profilehero__container">
        <img
          className="profilehero__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix logo"
        />
        <div className="profilehero__details">
          <h2>{user.email}</h2>
          <Button onClick={signOut}>Sign Out</Button>
          <button onClick={() => auth.signOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
