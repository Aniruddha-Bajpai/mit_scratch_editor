import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { updateList } from "./Redux/midAreaSlice";
import { ToastContainer } from "react-toastify";

export default function App() {
  const midArea = useSelector((store) => store.midArea);
  const dispatch = useDispatch();
  const updateHandler = (list) => {
    dispatch(updateList(list));
  };
  const onDragEnd = (result) => {
    const source = result.source;
    const destination = result.destination;
    const element = result.draggableId.split("-")[0];
    let old_list = midArea.components;
    // console.log(old_list);
    if (source.droppableId === "midArea") {
      if (old_list.length === 1 && destination === null) updateHandler([]);
      else if (destination === null) {
        let new_list = [...old_list];
        new_list.splice(source.index, 1);
        // console.log(new_list);
        updateHandler(new_list);
      }
    } else {
      if (
        destination === null &&
        source.droppableId === destination.droppableId
      )
        return;

      let new_list = [...old_list];
      new_list.push(element);
      console.log(old_list);
      updateHandler(new_list);
    }
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <DragDropContext
        onDragEnd={(result) => {
          onDragEnd(result);
          console.log(result);
        }}
      >
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar /> <MidArea />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </DragDropContext>
      <ToastContainer />
    </div>
  );
}
