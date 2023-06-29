import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Broadcast = ({ id }) => {
  const [message, setMessage] = useState("");

  const handleClick = () => message.length > 0 && toast(message);

  return (
    <>
      <div className="rounded  text-center p-2 my-3 bg-yellow-400 w-48">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white font-mono">Broadcast</div>
          <input
            className="text-center"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div
          id={id}
          className="rounded flex flex-row flex-wrap border-b text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => handleClick()}
        >
          Broadcast {`${message}`}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Broadcast;
