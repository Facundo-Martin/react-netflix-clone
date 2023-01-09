import React from "react";
import Button from "../UI/Button";

import "./Plans.css";

const Plans = () => {
  return (
    <>
      <div className="plan">
        <div>
          <p>Premium Plan</p>
          <div className="plan__description">
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
      <div className="plan">
        <div>
          <p>Standard Plan</p>
          <div className="plan__description">
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
      <div className="plan">
        <div>
          <p>Basic Plan</p>
          <div className="plan__description">
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
    </>
  );
};

export default Plans;
