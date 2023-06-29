import React from "react";
import Icon from "./Icon";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { motion, event, look, control } from "../SidebarComps";
import fetchComponent from "./fetchComponent";

export default function Sidebar() {
  return (
    <div className="w-60  flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 gap-10">
      <div>
        <div className="font-bold"> {"Motion"} </div>
        <Droppable key="motion" droppableId="motion-sidebar" type="COMPONENTS">
          {(provided) => {
            return (
              <div
                className="flex flex-col gap-3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {motion.map((e, i) => (
                  <Draggable
                    key={`${e}-motion`}
                    draggableId={`${e}-sidebar`}
                    index={i}
                  >
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          {fetchComponent(e)}
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
              </div>
            );
          }}
        </Droppable>
      </div>
      <div>
        <div className="font-bold"> {"Events"} </div>
        <Droppable key="event" droppableId="event-sidebar" type="COMPONENTS">
          {(provided) => {
            return (
              <div
                className="flex flex-col gap-3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {event.map((e, i) => (
                  <Draggable
                    key={`${e}-event`}
                    draggableId={`${e}-sidebar`}
                    index={i}
                  >
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          {fetchComponent(e)}
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
              </div>
            );
          }}
        </Droppable>
      </div>

      {/* <div>
        <div className="font-bold"> {"Motion"} </div>
        <Droppable key="motion-sidebar" droppableId="motion-sidebar">
          {(provided, snapshot) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable
                  key="moveX-motion-sidebar"
                  draggableId="moveX-motion-sidebar"
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                          {"Move 10 steps"}
                        </div>
                      </div>
                    );
                  }}
                </Draggable>
                <Draggable
                  key="turnL-motion-sidebar"
                  draggableId="turnL-motion-sidebar"
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                          {"Turn "}
                          <Icon
                            name="undo"
                            size={15}
                            className="text-white mx-2"
                          />
                          {"15 degrees"}
                        </div>
                      </div>
                    );
                  }}
                </Draggable>
                <Draggable
                  key="turnR-motion-sidebar"
                  draggableId="turnR-motion-sidebar"
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                          {"Turn "}
                          <Icon
                            name="redo"
                            size={15}
                            className="text-white mx-2"
                          />
                          {"15 degrees"}
                        </div>
                      </div>
                    );
                  }}
                </Draggable>
              </div>
            );
          }}
        </Droppable>
      </div>*/}
    </div>
  );
}
