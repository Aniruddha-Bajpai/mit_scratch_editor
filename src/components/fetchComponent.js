import React from "react";
import Broadcast from "./events/Broadcast";
import MoveX from "./motion/moveX";
import MoveY from "./motion/MoveY";

const fetchComponent = (element, id) => {
  switch (element) {
    case "BROADCAST":
      return <Broadcast id={id} />;
    case "MOVE_X":
      return <MoveX id={id} />;
    case "MOVE_Y":
      return <MoveY id={id} />;
    default:
      return React.null;
  }
};

export default fetchComponent;
