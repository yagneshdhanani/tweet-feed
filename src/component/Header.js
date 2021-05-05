import React from "react";
import { FaTwitter } from "react-icons/fa";

export default function Header({ user }) {
  return (
    <div className="header-component">
      <div className="user-profile">
        <img className="profile-picture" src={user.image} alt="img" />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-id">@{user.id}</span>
        </div>
      </div>
      <FaTwitter color="blue" size={30} />
    </div>
  );
}
