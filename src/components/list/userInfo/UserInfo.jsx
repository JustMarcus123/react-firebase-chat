import React from "react";
import "../list.css";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="username">
        <img src="./avatar.png"></img>
        <h2>Marcus</h2>
      </div>
      <div className="icons">
        <img src="./more.png"></img>
        <img src="./video.png"></img>
        <img src="./edit.png"></img>
      </div>
    </div>
  );
};

export default UserInfo;
