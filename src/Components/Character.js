import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

let underneathBlock;

// removed empty array from argument {}
function Character(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(70);
  const [blocksPosition, setBlocksPosition] = useState([]);
  const character = useRef();
  const Sprite = styled.div`
    left: ${({ x }) => x + "rem"};
    top: ${({ y }) => y + "%"};;
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
      setY(y - 20);
      setTimeout(() => {
        if (underneathBlock !== null) {
          alert(`Hurrah, you reached ${underneathBlock.classList.value}`);
        }
        setY(y);
      }, 200);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", movement);
    const positions = [];

    props.blocks.forEach((currentBlock) => {
      const currentPosition = currentBlock.current.getBoundingClientRect();
      positions.push(currentPosition);
    });

    setBlocksPosition(positions);

    // eslint-disable-next-line
  }, []); // empty array means useEffect only runs once rather than every time the component updates https://reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update

  useLayoutEffect(() => {
    const currentPosition = character.current.getBoundingClientRect();

    for (let index = 0; index < blocksPosition.length; index++) {
      const currentBlock = blocksPosition[index];
      if (currentBlock.x === currentPosition.x) {
        underneathBlock = props.blocks[index].current;
        break;
      } else {
        underneathBlock = null;
      }
    }
  });

  function increment(x) {
    return x + 5;
  };

  function decrement(x) {
    return x - 5;
  };

  return (
    <div onKeyPress={movement}>
      <Sprite className="char" ref={character} x={x} y={y}></Sprite>
    </div>
  );
};

export default Character;