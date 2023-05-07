import { useEffect, useState } from "react";

import { desktopPrograms } from "../../../constants/index.mjs";
import { useOsStore } from "../../../libs/osStates";
import Navbar from "./Navbar";
import Program from "./programs/Program";
import allPrograms from "./programs";
import ContextMenu from "../ContextMenu";

const OsContainer: React.FC = () => {
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

  const openProgram = (pName: string) => {
    let newProgram = {
      content: allPrograms[pName],
      name: pName,
      minimized: false,
    }
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
        <div className="grid grid-rows-3 gap-3 p-4">
          {desktopPrograms.map((p, index) => (
            <button
              className={`w-[80px]`}
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
              <img
                src={`/assets/os/icons/${p.name}.png`}
                alt={`${p.name} icon`}
                style={{ width: iconSize, height: iconSize }}
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
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default OsContainer;

// import { useEffect } from "react";
// import { desktopPrograms, osBgSrcs } from "../../../constants/index.mjs";
// import { useOsStore } from "../../../libs/osStates.mjs";
// import Navbar from "./Navbar";
// import Program from "./programs/Program";
// import allPrograms from "./programs";

// const OsContainer = () => {
//   const { bgSrc, setBgSrc, openedPrograms, setOpenedPrograms,isClicked,setIsClicked } = useOsStore();

//   useEffect(() => {
//     setBgSrc(osBgSrcs[0]);
//   }, []);

//   const openProgram = (pName) => {
//     let newProgram = {
//       content: allPrograms[pName],
//       name: pName,
//       minimized: false,
//     };
//     setOpenedPrograms([...openedPrograms, newProgram]);
//   };

//   return (
//     <div
//       className="h-screen w-screen"
//       style={{
//         backgroundImage: `url(${bgSrc})`,
//         backgroundSize: "cover",
//         overflow: "hidden",
//       }}
//     >
//       <div className="h-[calc(100vh-77px)] w-screen fixed top-0 left-0">
//         <div className="grid grid-rows-3 gap-3 p-4">
//           {desktopPrograms.map((p, index) => (
//             <button
//               key={p.name}
//               id="desktop-btn"
//               onDoubleClick={() => openProgram(p.name)}
//               onClick={()=>setIsClicked(p.name)}
//               style={isClicked === p.name ? {backgroundColor:"#c1c1c161"}:{}}
//             >
//               <img src={`/assets/os/icons/${p.name}.png`} />
//               <span>{p.name}</span>
//             </button>
//           ))}
//         </div>
//         {openedPrograms.map((p, index) => (
//           <Program
//             key={p.name}
//             ProgramContent={p.content}
//             programName={p.name}
//             minimized={p.minimized}
//             index={index}
//           />
//         ))}
//       </div>
//       <Navbar />
//     </div>
//   );
// };

// export default OsContainer;
