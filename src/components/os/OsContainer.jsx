import { useEffect } from "react";
import { desktopPrograms, osBgSrcs } from "../../constants";
import { useOsStore } from "../../store/osStates";
import Navbar from "./Navbar";
import Program from "./programs/Program";
import allPrograms from "./programs"

const OsContainer = () => {
  const { bgSrc, setBgSrc, openedPrograms, setOpenedPrograms } = useOsStore();

  useEffect(() => {
    setBgSrc(osBgSrcs[0]);
  }, []);

  const openProgram = (pName) =>{
    let newProgram = {
      content:allPrograms[pName],
      name:pName,
      minimized:false
    }
    setOpenedPrograms([...openedPrograms,newProgram])
  }

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="h-[calc(100vh-77px)] w-screen fixed top-0 left-0">
        <div className="grid grid-rows-3 gap-3 p-4">
          {desktopPrograms.map((p,index) => (
            <button id="desktop-btn" onDoubleClick={()=>openProgram(p.name)}>
              <img src={`/assets/os/icons/${p.name}.png`} />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
        {openedPrograms.map((p, index) => (
          <Program
            ProgramContent={p.content}
            programName={p.name}
            minimized={p.minimized}
            index={index}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default OsContainer;
