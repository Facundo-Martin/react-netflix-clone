import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./ProfileHero.css";

const ProfileHero = () => {
  const user = useSelector(selectUser);
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
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
