import React, { useState } from "react";
import { useSelector } from "react-redux";

function MoveX({ id }) {
  const character = useSelector((store) => store.character);
  const [moveState, setMoveState] = useState(0);
  const moveHandler = () => {
    const element = document.getElementById(character.active);
    element.style.left = moveState + "px";
    element.style.overflow = "visible";
  };
  return (
    <div
      className="bg-blue-200 w-44 grid grid-cols-3 p-2"
      id={id}
      onClick={() => moveHandler()}
    >
      MoveX
      <input
        className="border-2 mx-2"
        onChange={(e) => setMoveState(e.target.value)}
        type="number"
      />
      Steps
    </div>
  );
}

export default MoveX;
