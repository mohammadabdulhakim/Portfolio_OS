import { useEffect, useState } from "react";
// import Draggable from "react-draggable";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";
import { Rnd } from "react-rnd";
import { BiSquareRounded } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { BsDash } from "react-icons/bs"

import { useOsStore } from "../../../../libs/osStates";
import Image from "next/image";

const Program = ({ ProgramContent, programName, index, minimized, soon, programIcon }: any) => {
  let initPosition = { x: Math.floor(Math.random() * 300), y: Math.floor(Math.random() * 250) }

  const [size, setSize] = useState<{ width: string | number, height: string | number }>({ width: window.innerWidth / 2, height: window.innerHeight / 2 });
  const [position, setPosition] = useState(initPosition);
  const [zIndex, setZIndex] = useState(index);

  const { programActiveIndex, setProgramActiveIndex, openedPrograms, setOpenedPrograms } = useOsStore()


  const handleResize = (event: any, direction: any, ref: any) => {
    // Update state with new dimensions
    setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
  };

  const handleDrag = (event: any, data: any) => {
    // Update state with new position
    setPosition({ x: data.x, y: data.y });
  };


  // *------------------------------------------------------
  const maximize = () => {
    if (typeof (size.height) == "string") {
      setPosition(initPosition);
      setSize({ width: window.innerWidth / 2, height: window.innerHeight / 2 });
    } else {
      setSize({ width: "100%", height: "100%" });
      setPosition({ x: 0, y: 0 });
    }
  }
  const closeProgram = () => {
    interface newProgramInterface {
      soon: boolean;
      icon: string | null;
      content?: JSX.Element;
      minimized: boolean;
      name: string;
    }


    let newOpenedPrograms: newProgramInterface[] = openedPrograms.filter((p, i) => {
      return i !== index
    })
    setOpenedPrograms(newOpenedPrograms)
  }
  const minimize = () => {
    let newOpenedPrograms = openedPrograms.map((p, i) => {
      if (i == index) p.minimized = true
      return p;
    })
    setOpenedPrograms(newOpenedPrograms)
  }
  // !-----------------------------------------------------


  useEffect(() => {
    if (programActiveIndex == index) {
      setZIndex(100)
    } else {
      setZIndex(10)
    }
  }, [programActiveIndex,index])

  useEffect(() => {
    setProgramActiveIndex(index)
  }, [index,setProgramActiveIndex])

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
      style={{ boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.3)', zIndex, display: minimized && "none" }}
    >
      <div className={`app h-full drop-shadow-xl bg-[#232a6231] backdrop-blur-md text-white`} onMouseDown={() => setProgramActiveIndex(index)}>
        <div className="app-title p-0.5 flex flex-row items-center justify-between px-2 shadow-md">
          <div className="flex flex-row items-center justify-center gap-1">
            <Image
              src={soon ? programIcon : `/assets/os/icons/${programName}.png`}
              alt={programName}
              height={20}
              width={20}
            />
            <span>{programName}</span>
          </div>
          <div className="text-white flex flex-row gap-2">
            <BiSquareRounded onClick={maximize} className="drop-shadow-lg bg-green-600 text-green-600 hover:text-white rounded-full opacity-80 transition-all hover:opacity-100 cursor-pointer p-0.5" />
            <BsDash onClick={minimize} className="bg-yellow-600 text-yellow-600 hover:text-white rounded-full opacity-80 transition-all hover:opacity-100 cursor-pointer" />
            <MdClose onClick={closeProgram} className="bg-red-600 text-red-600 hover:text-white rounded-full opacity-80 transition-all hover:opacity-100 cursor-pointer" />
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
