import React, { useState } from "react";
import ShowChats from "./components/ShowChats";
import "./app.css";
import ShowMessages from "./components/ShowMessages";
import ShowInfo from "./components/ShowInfo";

export type MessageType = {
  time: string;
  value: string;
}

const App = () => {
  const [messages, setMessages] = useState<Array<MessageType> >([]);
  const [lastValue, setLastValue] = useState<string>("");

  const handleSubmit = (value: string) => {
      setMessages([...messages, {
        time: showTime,
        value: value
      }]);
      setLastValue(value);
  }

  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes();


  return (
    <main className="app-main">
      <section className="app-section">
        <ShowChats lastValue={lastValue}/>
      </section>
      <section className="app-section-center">
        <ShowMessages handleSubmit={handleSubmit} messages={messages} lastMessage={lastValue}/>
      </section>
      <section className="app-section">
        <ShowInfo />
      </section>
    </main>
  );
};

export default App;
