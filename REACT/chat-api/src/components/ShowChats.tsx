import React from "react";
import "./showChats.css";
import { Button } from "@material-ui/core";

type ShowChatsPropsType = {
  lastValue: string;
}

const ShowChats = (props: ShowChatsPropsType) => {
  return (
    <div className="showchats-container">
      <div className="showchats-items">
        <h1 className="main-title">My Chats</h1>
        <Button style={{color: "purple"}}>+</Button>
      </div>

      <hr color='ECECEC'/>
      <div className="chat">
        <h4>ShowMessages</h4>
        <p style={ {fontSize: "12px", margin: "4px 2px", fontFamily: "sans-serif", paddingLeft: '5px'} }>{props.lastValue}</p>
      </div>
    </div>
  );
};

export default ShowChats;
