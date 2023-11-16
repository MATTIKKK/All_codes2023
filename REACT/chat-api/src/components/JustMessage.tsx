import React from "react";
import "./justMessage.css";

type JustMessagePropsType = {
  value: string;
};

const JustMessage = (props: JustMessagePropsType) => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes();
  const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  return (
    <div className="justMessage-container">
      <span style={ {fontSize: '10px', color: 'gray', margin: '5px'} }>{showTime}</span>
      <span className="message">
        {props.value}
      </span>
      
    </div>
  );
};

export default JustMessage;
