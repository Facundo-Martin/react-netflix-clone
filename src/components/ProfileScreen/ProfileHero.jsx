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
              <p>Premium Plan</p>
              <div className="profilehero__subscription-plan__description">
                <span>✓ Watch on 4 supported devices at a time</span>
                <span>✓ Unlimited movies, TV shows, and mobile games</span>
                <span>✓ Watch in Ultra HD</span>
                <span>✓ Ad-free TV shows and movies</span>
                <span>✓ Download on 4 supported devices at a time</span>
              </div>
            </div>
            <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
              Subscribe
            </Button>
          </div>
          <div className="profilehero__subscription-plan">
            <div>
              <p>Standard Plan</p>
              <div className="profilehero__subscription-plan__description">
                <span>✓ Watch on 2 supported devices at a time</span>
                <span>✓ Unlimited movies, TV shows, and mobile games</span>
                <span>✓ Watch in Full HD</span>
                <span>✓ Ad-free TV shows and movies</span>
                <span>✓ Download on 2 supported devices at a time</span>
              </div>
            </div>
            <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
              Subscribe
            </Button>{" "}
          </div>
          <div className="profilehero__subscription-plan">
            <div>
              <p>Basic Plan</p>
              <div className="profilehero__subscription-plan__description">
                <span>✓ Watch on 1 supported device at a time</span>
                <span>✓ Unlimited movies, TV shows, and mobile games</span>
                <span>✓ Watch in HD</span>
                <span>✓ Ad-free TV shows and movies</span>
                <span>✓ Download on 1 supported device at a time</span>
              </div>
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
