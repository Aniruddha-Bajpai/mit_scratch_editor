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
  const onDragEnd = (result) => {
    let destination = result.destination;
    let source = result.source;
    if (
      (source.droppableId.split("-")[1] === "midArea" &&
        destination === null) ||
      (source.droppableId.split("-")[1] === "midArea" &&
        destination.droppableId.split("-")[1] === "sidebar")
    ) {
      let allList = [...midArea.midAreaLists];
      const target_index_list = source.droppableId.split("-")[0];
      let target_list = [...allList[target_index_list].components];
      target_list.splice(source.index, 1);
      allList[target_index_list] = {
        ...allList[target_index_list],
        components: target_list,
      };
      dispatch(updateList(allList));
    }

    // when component is drag in its own container
    else if (
      (source.droppableId.split("-")[1] === "sidebar" &&
        destination === null) ||
      (destination.droppableId.split("-")[1] === "sidebar" &&
        source.droppableId.split("-")[1] === "sidebar")
    )
      return;
    else if (
      destination.droppableId.split("-")[0] !==
        source.droppableId.split("-")[0] &&
      destination.droppableId.split("-")[1] == "midArea" &&
      source.droppableId.split("-")[1] == "midArea"
    ) {
      let allList = [...midArea.midAreaLists];
      const source_index_midlist = source.droppableId.split("-")[0];
      const dest_index_midlist = destination.droppableId.split("-")[0];
      let dest_mid_list = [...allList[dest_index_midlist].components];
      let source_mid_list = [...allList[source_index_midlist].components];
      const element_indx_source = source.index;
      const element_indx_dest = destination.index;
      // operation to remove element from source and add it to
      let targetElement = source_mid_list.splice(element_indx_source, 1);
      dest_mid_list.splice(element_indx_dest, 0, targetElement[0]);
      allList[source_index_midlist] = {
        ...allList[source_index_midlist],
        components: source_mid_list,
      };
      allList[dest_index_midlist] = {
        ...allList[dest_index_midlist],
        components: dest_mid_list,
      };
      dispatch(updateList(allList));
    } else if (
      source.droppableId.split("-")[1] === "sidebar" &&
      destination.droppableId.split("-")[1] === "midArea"
    ) {
      let allList = [...midArea.midAreaLists];
      let element = result.draggableId.split("-")[0];
      console.log(element);
      const target_indx_list = destination.droppableId.split("-")[0];
      const element_dest_index = destination.index;
      let target_list = [...allList[target_indx_list].components];
      target_list.splice(element_dest_index, 0, element);
      // target_list.push(element);
      allList[target_indx_list] = {
        ...allList[target_indx_list],
        components: target_list,
      };

      dispatch(updateList(allList));
    }
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <DragDropContext
        onDragEnd={(result) => {
          onDragEnd(result);
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
