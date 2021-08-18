import React from "react";
import Clippy from "./Components/Clippy";
import Contact from "./Components/Contact";
import MyComputer from "./Components/MyComputer";
import RecycleBin from "./Components/RecycleBin";
import StartMenu from "./Components/StartMenu";
import TheInternet from "./Components/TheInternet";
import Time from "./Components/Time";
import MyDocuments from "./Components/MyDocuments";
import MiniGameIcon from "./Components/MiniGameIcon";
import MiniGame from "./Components/MiniGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <>
      <Router basename="windows-95">
        <Clippy />
        <Contact />
        <MyComputer />
        <RecycleBin />
        <StartMenu />
        <TheInternet />
        <MyDocuments />
        <Time />
        <MiniGameIcon />
        <MiniGame />
      </Router>
    </>
  );
}

export default App;
