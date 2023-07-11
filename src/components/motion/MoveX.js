import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSpritePosition } from "../../Redux/characterSlice";

function MoveX({ id }) {
  const character = useSelector((store) => store.character);
  const dispatch = useDispatch();
  const positionCalX = useRef(0);
  useEffect(() => {
    const sprite = character.sprites.filter((s) => s.id === character.active);
    positionCalX.current = parseInt(sprite[0].positionX);
  }, [character.active]);
  const [moveState, setMoveState] = useState(0);
  const moveHandler = () => {
    positionCalX.current = parseInt(positionCalX.current) + parseInt(moveState);
    dispatch(
      updateSpritePosition({
        id: character.active,
        position: positionCalX.current,
        posX: true,
      })
    );
    const element = document.getElementById(character.active);
    element.style.left = positionCalX.current + "px";
    element.style.overflow = "visible";
  };
  return (
    <div className="bg-blue-200 w-44 grid grid-cols-3 p-2 ">
      MoveX
      <input
        className="border-2 mx-2"
        onChange={(e) => setMoveState(e.target.value)}
        type="number"
      />
      Steps
      <span
        id={id}
        onClick={() => moveHandler()}
        className="border text-gray-400 rounded bg-blue-100 p-1 text-center"
      >
        Move
      </span>
    </div>
  );
}

export default MoveX;
