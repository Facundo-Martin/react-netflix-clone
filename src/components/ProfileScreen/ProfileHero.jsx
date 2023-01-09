import React from "react";
import { auth } from "../../firebase";
import useUser from "../../hooks/useUser";
import Button from "../UI/Button";
import Plans from "./Plans";

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
      <h1>Profile</h1>
      <div className="profilehero__container">
        <img
          className="profilehero__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix logo"
        />
        <div className="profilehero__details">
          <h3>{user.email}</h3>

          <h4>Subscription Plans</h4>
          <Plans />
          <Button
            style={{ width: "100%", marginTop: "20px" }}
            onClick={signOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
