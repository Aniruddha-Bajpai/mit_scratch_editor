import React, { useEffect, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, setActive } from "../Redux/characterSlice";
import fetchComponent from "./fetchComponent";

export default function MidArea() {
  const character = useSelector((store) => store.character);
  const mid = useSelector((store) => store.midArea);
  const [sprite, setSprite] = useState(character.active);
  const dispatch = useDispatch();
  const addSprite = () => {
    dispatch(addCharacter());
  };
  const handleChange = (e) => {
    setSprite(e.target.value);
    dispatch(setActive(e.target.value));
  };

  const eventFire = (element, event_) => {
    if (element && element.fireEvent) {
      element.fireEvent("on" + event_);
    } else if (element) {
      var eventObj = document.createEvent("Events");
      eventObj.initEvent(event_, true, false);
      element.dispatchEvent(eventObj);
    }
  };

  const executeHandler = () => {
    const arr = mid.components;
    arr.forEach((element, i) => {
      const id_ = element + "-" + "midArea";
      const comp_ = document.getElementById(id_);
      eventFire(comp_, "click");
    });
  };

  return (
    <div className="flex-1 h-full overflow-auto items-center px-10">
      {/* Top header */}
      <div className="h-14 grid grid-cols-2 text-center my-5 py-3">
        <div className="font-mono py-2 ">
          <span className="bg-gray-200 p-3 rounded-lg">MidArea</span>
        </div>
        <form className="space-x-10" onSubmit={(e) => e.preventDefault()}>
          <select value={sprite} onChange={(e) => handleChange(e)}>
            {character.sprites.map((s, i) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button
            className=" border border-solid rounded px-3 py-1 bg-green-300"
            onClick={addSprite}
          >
            Add
          </button>
        </form>
      </div>
      {/* Middle List */}
      <div className="h-auto w-full gap-2  mt-10 flex flex-col items-center p-10 border">
        <button
          name="flag"
          className="bg-green-200 p-2"
          onClick={executeHandler}
        >
          Execute
        </button>
        <Droppable key="midArea" droppableId="midArea" type="COMPONENTS">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="border p-5"
              >
                {mid.components.map((e, i) => {
                  const comp_id = `${e}-midArea`;

                  return (
                    <Draggable
                      index={i}
                      key={comp_id}
                      draggableId={comp_id + "-" + i}
                    >
                      {(provided) => {
                        return (
                          <div
                            className="p-5"
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            {fetchComponent(e, comp_id)}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
}
