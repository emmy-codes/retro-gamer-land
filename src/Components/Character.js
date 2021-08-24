import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Character({}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const Sprite = styled.div`
    background-color: #593202;
    width: 5rem;
    height: 8rem;
    left: ${({ x }) => x + "rem"};
    top: ${({ y }) => y + "rem"};
    position: absolute; ;
  `;
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment
  };

  const actionYMap = {
    ArrowDown: increment,
    ArrowUp: decrement
  };

  function movement(e) {
    const actionX = actionXMap [e.key];
    const actionY = actionYMap [e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
  };

  useEffect(() => {
    document.addEventListener("keydown", movement);
  }, []);

  function increment (x) {
    return x + 1;
  };

  function decrement (x) {
    return x - 1;
  };

  return (
    <div onKeyPress={movement}>
      <Sprite x={x} y={y}></Sprite>
    </div>
  );
};

export default Character;