import React, { useEffect, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, setActive } from "../Redux/characterSlice";
import fetchComponent from "./fetchComponent";
import { addList, updateActive } from "../Redux/midAreaSlice";

export default function MidArea() {
  const dispatch = useDispatch();
  const character = useSelector((store) => store.character);
  const mid = useSelector((store) => store.midArea);
  const [midList, setMidList] = useState(mid.active);
  const [sprite, setSprite] = useState(character.active);
  const addSprite = () => {
    dispatch(addCharacter());
  };
  const handleChange = (e) => {
    setSprite(e.target.value);
    dispatch(setActive(e.target.value));
  };
  const changeList = (e) => {
    setMidList(e.target.value);
    dispatch(updateActive(e.target.value));
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
    const arr = mid.midAreaLists[mid.active.split("-")[0]].components;
    console.log(arr);
    arr.forEach((e, i) => {
      setTimeout(() => {
        const id_ = e + "-" + mid.active + "-" + i;
        const comp_ = document.getElementById(id_);
        console.log(comp_);
        // console.log(id);
        eventFire(comp_, "click");
      }, 1000 * i);
    });
  };
  const addMidList = () => {
    dispatch(addList());
  };

  return (
    <div className="flex-1 h-full overflow-auto items-center px-10">
      {/* Top header */}
      <div className="h-14 grid grid-cols-3 text-center my-5 py-3">
        <div className="font-mono py-2 ">
          <span className="bg-gray-200 p-3 rounded-lg">MidArea</span>
        </div>
        <form
          className="space-x-10 flex flex-col-reverse mx-6 px-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            className="mx-10"
            value={sprite}
            onChange={(e) => handleChange(e)}
          >
            {character.sprites.map((s, i) => (
              <option key={`${s.id}-${i}`} value={s.id}>
                {s.id}
              </option>
            ))}
          </select>
          <button
            className=" border border-solid rounded px-3 py-1 bg-blue-300"
            onClick={addSprite}
          >
            Add
          </button>
        </form>
        <form
          className="space-x-10 flex flex-col-reverse mx-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            className="mx-10"
            value={midList}
            onChange={(e) => changeList(e)}
          >
            {mid.midAreaLists.map((l, i) => (
              <option key={`${l.id}-${i}`} value={l.id}>
                {l.id}
              </option>
            ))}
          </select>
          <button
            className=" border border-solid rounded px-3 py-1 bg-red-300"
            onClick={addMidList}
          >
            Add
          </button>
        </form>
      </div>
      {/* Middle List */}
      <div>
        <button
          name="flag"
          className="bg-green-200 p-2"
          onClick={executeHandler}
        >
          Execute
        </button>
      </div>
      {mid.midAreaLists.map((list, index) => {
        return (
          <div
            className="h-auto w-full gap-2  mt-10 flex flex-col items-center p-10 border"
            key={list.id}
          >
            <Droppable key={list.id} droppableId={list.id} type="COMPONENTS">
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="border p-5"
                  >
                    {list.components.map((e, i) => {
                      const comp_id = `${e}-${list.id}-${i}`;

                      return (
                        <Draggable
                          index={i}
                          key={comp_id + "-" + i}
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
        );
      })}
    </div>
  );
}
