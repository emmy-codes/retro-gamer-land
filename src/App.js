import React from "react";
import Clippy from "./Components/Clippy";
import Contact from "./Components/Contact";
import MyComputer from "./Components/MyComputer";
import RecycleBin from "./Components/RecycleBin";
import StartMenu from "./Components/StartMenu";
import TheInternet from "./Components/TheInternet";
import Time from "./Components/Time";
import "./app.css"

function App() {
  return (
    <>
      <Clippy />
      <Contact />
      <MyComputer />
      <RecycleBin />
      <StartMenu />
      <TheInternet />
      <Time />
    </>
  );
}

export default App;