import moment from "moment";
import { navLinks } from "../../../constants/index.mjs";
import { useOsStore } from "../../../libs/osStates";
import { useEffect, useState } from "react";
import StartMenu from "./StartMenu";

const Navbar = ({setWaitStartup,openProgram}) => {
  const { openedPrograms, setOpenedPrograms,setIsClicked,isClicked } = useOsStore();

  const [momentLTS, setMomentLTS] = useState("");

  const minimize = (index: number) => {
    interface NOPInterface {
      minimized: boolean;
      name: string;
    }
    
    let newOpenedPrograms:NOPInterface[] = openedPrograms.map((p, i) => {
      if (i == index) {
        switch (p.minimized) {
          case true:
            p.minimized = false;
            break;
          default:
            p.minimized = true;
            break;
        }
      }
      return p;
    });

      setOpenedPrograms(newOpenedPrograms);
  };

  useEffect(() => {
    let momentLTSInterval = setInterval(() => {
      setMomentLTS(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(momentLTSInterval);
  }, [momentLTS]);

  const handleStartMenuClick = () =>{
    isClicked === "startMenu" ? setIsClicked("") : setIsClicked("startMenu");
  }

  return (
    <>
      {isClicked === "startMenu" && <StartMenu setWaitStartup={setWaitStartup} openProgram={openProgram} /> }
    <div className="z-[99999] fixed bottom-0 left-0 right-0 h-[50px] bg-mainColor/25 backdrop-blur-md flex items-center justify-between md:px-2 px-1 overflow-hidden">
      <div id="navbar-left"></div>
      <div
        id="navbar-bottom"
        className="bg-[#99b6df52] h-full min-w-[100px] px-2 py-0.5 rounded-md flex items-center justify-center gap-2"
      >
        <button id="navbar-btn" onClick={handleStartMenuClick}>
          <img src="/assets/os/icons/windows.png" />
        </button>
        <hr className="border-none bg-[#323232] h-[80%] w-[1px]" />
        {openedPrograms.length !== 0 && (
          <>
            {openedPrograms.map((p, index) => (
              <button
                key={p.name}
                onClick={() => minimize(index)}
                id="navbar-btn"
                className={`${
                  p.minimized && "bg-[#ffffff78] border-b-2 border-black"
                }`}
              >
                <img src={p.soon? p.icon:`/assets/os/icons/${p.name}.png`} />
              </button>
            ))}
            <hr className="border-none bg-[#323232] h-[80%] w-[1px]" />
          </>
        )}
        {navLinks.map((item) => (
          <a key={item.img} href={item.link} target="_blank" id="navbar-btn">
            <img
              src={`/assets/os/icons/${item.img}.png`}
              className="h-10 rounded-lg"
            />
          </a>
        ))}
      </div>

      <div
        id="navbar-right"
        className="flex flex-col items-center justify-center text-[13px] text-slate-200 bg-gray-100/5 hover:bg-gray-100/10 transition-all rounded-md p-2"
      >
        <span className="font-light">{momentLTS}</span>
        <span>{moment().format("LL")}</span>
      </div>
    </div>
    </>
  );
};

export default Navbar;
