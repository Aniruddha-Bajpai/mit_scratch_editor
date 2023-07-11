import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { motion, event } from "../SidebarComps";
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
    </div>
  );
}
