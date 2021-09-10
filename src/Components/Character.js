import React, { useEffect, useState } from "react";
import styled from "styled-components";

// removed empty array from argument {}
function Character() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(70);
  const Sprite = styled.div`
    background-color: #5261eb;
    outline: dotted;
    width: 5rem;
    height: 8rem;
    left: ${({ x }) => x + "rem"};
    top: ${({ y }) => y + "%"};
    position: absolute; ;
  `;

  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment,
  };

  // eslint-disable-next-line
  function movement(event) {
    const actionX = actionXMap[event.key];
    
    actionX && setX(actionX);
    if (event.key === "ArrowUp") {
      setY(y - 20)
      setTimeout(() => {setY(y)},200)
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", movement);
    // eslint-disable-next-line
  }, []);

  function increment(x) {
    return x + 5;
  };

  function decrement(x) {
    return x - 5;
  };

  return (
    <div onKeyPress={movement}>
      <Sprite x={x} y={y}></Sprite>
    </div>
  );
};

export default Character;