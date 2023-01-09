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
          <div className="profilehero__subscription-plan">
            <div>
              <p>Netflix Premium</p>
              <span style={{ fontSize: ".8rem" }}>Movies & TV Shows</span>
            </div>
            <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
              Subscribe
            </Button>
          </div>
          <div className="profilehero__subscription-plan">
            <div>
              <p>Netflix Basic</p>
              <span style={{ fontSize: ".8rem" }}>Movies</span>
            </div>
            <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
              Subscribe
            </Button>{" "}
          </div>
          <div className="profilehero__subscription-plan">
            <div>
              <p>Free Plan</p>
              <span style={{ fontSize: ".8rem" }}>14-day trial</span>
            </div>
            <Button
              style={{
                padding: "8px 12px",
                fontSize: ".8rem",
                backgroundColor: "grey",
              }}
            >
              Current plan
            </Button>
          </div>
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
