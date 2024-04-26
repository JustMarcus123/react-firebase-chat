import React from "react";
import "../list.css";

const ChatList = () => {
  return (
    <div className="chat-list">
      <div className="search">
        <div className="search-bar">
          <img src="/search.png" />
          <input type="text" placeholder="search" />
        </div>
        <img src="./plus.png" />
      </div>
    </div>
  );
};

export default ChatList;
