import React from "react";
import Character from "./Character";

function MiniGame() {
  const block1 = React.useRef();
  const block2 = React.useRef();
  const block3 = React.useRef();

  const blocks = [block1, block2, block3];

  return (
    <>
      <div className="main-stage">
        <div className="ground"></div>
        <div className="block1" ref={block1}></div>
        <div className="block2" ref={block2}></div>
        <div className="block3" ref={block3}></div>
      </div>
      <Character blocks={blocks} />
    </>
  );
};

export default MiniGame;