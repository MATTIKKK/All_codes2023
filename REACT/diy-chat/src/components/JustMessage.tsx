import React from "react";
import "./justMessage.css";

type JustMessagePropsType = {
  value: string;
  showTime: string;
};

const JustMessage = (props: JustMessagePropsType) => {
  
  return (
      <div className="message">
        <p style={{color: '', fontSize: '10px', float: 'left'}}>{props.showTime}</p>
        <span className="message-text" style={{}}>{props.value}</span>
      </div>
      

  );
};


export default JustMessage;