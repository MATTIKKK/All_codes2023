import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "./showMessages.css";
import JustMessage from "./JustMessage";
import { MessageType } from "../App";
import { Button, Input } from "@material-ui/core";

type ShowMessagesPropsType = {
  handleSubmit: (value: string) => void;
  messages: MessageType[];
  lastMessage: string;
};

const ShowMessages = (props: ShowMessagesPropsType) => {

  const [value, setValue] = useState('');
  const bottomRef = useRef<null | HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value.trim() !== ''){
      props.handleSubmit(value.trim());
      setValue('');
    } 
  }

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [props.messages]);

  const newMessages = props.messages.map((m) => {
    return <JustMessage value={m.value} showTime={m.time} />;
  });

  const date = new Date();
  const today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return (
    <div className="showMessages-container">
      <div className="showMessages-header">
        <h1 className="showMessages-title">ShowMessages</h1>
        <hr color="F5F5F5" />
      </div>
      <div id="showMessages-body">
        <p style={{ textAlign: "center", color: "lightgray" }}>{today}</p>

        <div className="messages-to-right">
          <div className="messages">{newMessages}</div>
          <div ref={bottomRef} />
        </div>
      </div>

      <div className='showInput-container'>
        <hr />
        <form onSubmit={handleSubmit}>
          <Input className="input" type="text" value={value} onChange={handleChange} />
          <Button style={{color: "purple"}}>Send</Button>
        </form>
        
    </div>
    </div>
  );
};

export default ShowMessages;
