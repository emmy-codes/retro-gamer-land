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
import "./App.css";

function App() {
  return (
    <>
      <Router basename="/windows-95">
        <Switch>
          <Route exact path="/">
            <div className="background">
              <div className="taskbar"></div>
              <Clippy />
              <Contact />
              <MyComputer />
              <RecycleBin />
              <StartMenu />
              <TheInternet />
              <MyDocuments />
              <Time />
              <MiniGameIcon />
            </div>
          </Route>
          <Route path="/retro-gamer-land">
            <MiniGame />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;