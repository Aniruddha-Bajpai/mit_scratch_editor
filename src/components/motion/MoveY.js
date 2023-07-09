import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateSpritePosition } from "../../Redux/characterSlice";

function MoveY({ id }) {
  const dispatch = useDispatch();
  const character = useSelector((store) => store.character);
  const positionCalY = useRef(0);
  const [moveState, setMoveState] = useState(0);
  useEffect(() => {
    const sprite = character.sprites.filter(
      (s) => s.id === character.active
    )[0];
    positionCalY.current = sprite.positionY;
  }, [character.active]);
  const moveHandler = () => {
    positionCalY.current = parseInt(positionCalY.current) + parseInt(moveState);
    dispatch(
      updateSpritePosition({
        id: character.active,
        position: positionCalY.current,
        posY: true,
      })
    );
    const element = document.getElementById(character.active);
    element.style.top = positionCalY.current + "px";
    element.style.overflow = "visible";
  };
  return (
    <div className="bg-blue-200 w-44 grid grid-cols-3 p-2">
      MoveY
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

export default MoveY;
