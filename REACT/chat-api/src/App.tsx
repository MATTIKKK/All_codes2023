import React, { useState } from "react";
import ShowChats from "./components/ShowChats";
import "./app.css";
import ShowMessages from "./components/ShowMessages";
import ShowInfo from "./components/ShowInfo";

const App = () => {
  const [messages, setMessages] = useState<Array<string> >([]);

  const handleSubmit = (value: string) => {
      setMessages([...messages, value]);
  }

  return (
    <main className="app-main">
      <section className="app-section">
        <ShowChats lastValue={messages[messages.length - 1]}/>
      </section>
      <section className="app-section-center">
        <ShowMessages handleSubmit={handleSubmit} messages={messages}/>
      </section>
      <section className="app-section">
        <ShowInfo />
      </section>
    </main>
  );
};

export default App;
