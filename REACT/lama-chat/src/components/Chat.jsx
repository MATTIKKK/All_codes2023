import React from "react";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>SpongeBob</span>
        <div className="chatIcons">
          <VideoCameraFrontIcon className="icon"/>
          <PersonAddIcon className="icon"/>
          <MoreHorizIcon className="icon"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
