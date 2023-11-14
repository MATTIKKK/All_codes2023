import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="a3dc54ae-4656-4e55-b5d3-d12ebe84558e"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      rendrChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
