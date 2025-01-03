import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { desktopPrograms } from "../../../constants/index";
import { useOsStore } from "../../../libs/osStates";
import Navbar from "./Navbar";
import Program from "./programs/Program";
import allPrograms from "./programs";
import ContextMenu from "../ContextMenu";
import Image from "next/image";

const OsContainer = ({ setWaitStartup }: { setWaitStartup: Dispatch<SetStateAction<boolean>> }) => {
  const {
    bgSrc,
    openedPrograms,
    setOpenedPrograms,
    isClicked,
    setIsClicked,
    iconSize,
  } = useOsStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 500);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openProgram = (pName: string, soon: boolean = false, icon?: string) => {
    interface newProgramInterface {
      soon: boolean;
      icon: string | null;
      content?: JSX.Element;
      minimized: boolean;
      name: string;
    }

    let newProgram: newProgramInterface = {
      name: pName,
      minimized: false,
      soon,
      icon: icon || null,
    }

    newProgram.content = soon ? () => (<h1 className="text-center absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] text-[30px] font-bold">Soon</h1>) : allPrograms[pName]

    setOpenedPrograms([...openedPrograms, newProgram]);
  };

  const handleClick = (name: string) => {
    if (isMobile) {
      openProgram(name);
    } else {
      setIsClicked(name);
    }
  };

  return (
    <div
      className="h-screen w-screen relative select-none"
      id="os-container"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="h-[calc(100vh-77px)] w-screen fixed top-0 left-0">
        <ContextMenu divId="os-container" openProgram={openProgram} />
        <div className="grid grid-cols-2 h-full w-[300px] gap-3 p-4">
          {desktopPrograms.map((p, index) => (
            <button
              className={`w-[80px] h-[100px]`}
              key={p.name}
              id="desktop-btn"
              onDoubleClick={() => openProgram(p.name)}
              onClick={() => handleClick(p.name)}
              style={
                isClicked === p.name
                  ? {
                    backgroundColor: "#c1c1c161",
                  }
                  : {}
              }
            >
              <Image
                src={`/assets/os/icons/${p.name}.png`}
                alt={`${p.name} icon`}
                width={iconSize}
                height={iconSize}
              />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
        {openedPrograms.map((p, index) => (
          <Program
            key={p.name}
            ProgramContent={p.content}
            programName={p.name}
            minimized={p.minimized}
            index={index}
            soon={p.soon}
            programIcon={p.icon}
          />
        ))}
      </div>
      <Navbar setWaitStartup={setWaitStartup} openProgram={openProgram} />
    </div>
  );
};

export default OsContainer;
