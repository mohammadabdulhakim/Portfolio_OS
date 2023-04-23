import { useEffect, useState } from "react";
import { osBgSrcs } from "../../constants";
import { useOsStore } from "../../store/osStates";
import Navbar from "./Navbar";
import Vscode from "./programs/Vscode";
import Program from "./programs/Program";

const OsContainer = () => {
  const { bgSrc, setBgSrc, openedPrograms } = useOsStore();

  useEffect(() => {
    setBgSrc(osBgSrcs[0]);
  }, []);

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="h-[calc(100vh-78px)] relative">
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
