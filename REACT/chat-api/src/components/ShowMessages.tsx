import React from "react";
import ShowInput from "./ShowInput";
import "./showMessages.css";
import JustMessage from "./JustMessage";

type ShowMessagesPropsType = {
  handleSubmit: (value: string) => void;
  messages: string[];
};

const ShowMessages = (props: ShowMessagesPropsType) => {
  const newMessages = props.messages.map((m) => {
    return <JustMessage value={m} />;
  });

  const date = new Date();
  const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  return (
    <div className="container">
      <div className="showMessages-header">
        <h1 className="showMessages-title">ShowMessages</h1>
        <hr color="F5F5F5" />
      </div>

      <div className="messages">
        <p style={ {textAlign: 'center', color: 'lightgray'} }>{today}</p>
        {newMessages}
      </div>

      <ShowInput handleSubmit={props.handleSubmit} />
    </div>
  );
};

export default ShowMessages;
