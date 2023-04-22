import { useState } from "react";
// import Draggable from "react-draggable";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";
import { Rnd } from "react-rnd";
import {BiSquareRounded} from "react-icons/bi"
import {MdClose} from "react-icons/md"

const Program = ({ ProgramContent, programName }) => {
  const [size, setSize] = useState({ width: "100%", height: "100%" });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleResize = (event, direction, ref, delta, position) => {
    // Update state with new dimensions
    setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
  };

  const handleDrag = (event, data) => {
    // Update state with new position
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Rnd
      size={size}
      position={position}
      onResize={handleResize}
      onDrag={handleDrag}
      minWidth={100}
      minHeight={100}
      dragHandleClassName="app-title"
      resizeHandleStyles={{
        bottom: { transform: "translateY(22px)" },
        right: { height: "calc(100% + 22px)" },
        bottomRight: { transform: "translateY(22px)" },
        left: { height: "calc(100% + 22px)" },
        bottomLeft: { transform: "translateY(22px)" },
      }}
      style={{boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.3)'}}
    >
      <div className="app h-full drop-shadow-xl">
        <div className="app-title p-0.5 flex flex-row items-center justify-between px-2">
          <div className="flex flex-row items-center justify-center gap-1">
            <img
              src={`/assets/os/icons/${programName}.png`}
              alt={programName}
              className="h-5"
            />
            <span>{programName}</span>
          </div>
          <div className="text-white flex flex-row gap-2">
            <BiSquareRounded className="bg-green-500 text-green-500 hover:text-white rounded-full opacity-80 transition-all hover:opacity-100 cursor-pointer p-0.5" />
            <MdClose className="bg-red-500 text-red-500 hover:text-white rounded-full opacity-80 transition-all hover:opacity-100 cursor-pointer" />
          </div>
        </div>
        <div className="app-content h-full">
          <ProgramContent />
        </div>
      </div>
    </Rnd>
  );
};

export default Program;
