import react, { Component } from "react";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import EventBind from "./Components/EventBind";
import Literals from "./Components/Literals";
import PrarentComponent from "./Components/PrarentComponent";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Greet name="Harsh" />
      <Message />
      <Counter />
      <EventBind />
      <Literals />
      <PrarentComponent />
    </div>
  );
}

export default App;
