import React from "react";
import "./list.css";
import User_info from "./userInfo/UserInfo";
import Chat_list from "./chatLIst/ChatList";

const List = () => {
  return (
    <div className="list">
      <User_info />
      <Chat_list />
    </div>
  );
};

export default List;
