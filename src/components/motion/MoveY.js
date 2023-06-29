import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function MoveY({ id }) {
  const character = useSelector((store) => store.character);
  const [moveState, setMoveState] = useState(0);
  const moveHandler = () => {
    const element = document.getElementById(character.active);
    element.style.top = moveState + "px";
    element.style.overflow = "visible";
  };
  return (
    <div
      className="bg-blue-200 w-44 grid grid-cols-3 p-2"
      id={id}
      onClick={() => moveHandler()}
    >
      MoveY
      <input
        className="border-2 mx-2"
        onChange={(e) => setMoveState(e.target.value)}
        type="number"
      />
      Steps
    </div>
  );
}

export default MoveY;
