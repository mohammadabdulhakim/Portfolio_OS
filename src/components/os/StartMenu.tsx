import { useSpring, animated } from "@react-spring/web";
import { MdPowerSettingsNew, MdSearch } from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FormEvent, useState } from "react";

import { useOsStore } from "../../../libs/osStates";
import Link from "next/link";
import { desktopPrograms, startMenuPrograms } from "../../../constants/index";
import Image from "next/image";

const StartMenu = ({ setWaitStartup, openProgram }: { setWaitStartup: (newValue: boolean) => void, openProgram: (pName: string, soon?: boolean, icon?: string) => void }) => {
  const [powerSettings, setPowerSettings] = useState(false)
  const { setIsClicked, setOpenedPrograms } = useOsStore();
  const [props] = useSpring(
    () => ({
      from: { opacity: 0, y: "100%", x: "50%" },
      to: { opacity: 1, y: "0" },
    }),
    []
  );

  const handleSubmit = (e: any /* FormEvent<HTMLFormElement> */) => {
    e.preventDefault();

    setIsClicked("")

    if (!e.target) return;
    window.open("https://www.google.com/search?safe=active&q=" + (e.target["0"] as HTMLInputElement).value);
  }



  return (
    <>
      <span
        className="block top-0 fixed right-0 bg-black/5 backdrop-blur-sm h-screen w-screen z-[99998]"
        onClick={() => setIsClicked("")}
      ></span>
      <animated.div
        style={props}
        className={`text-white fixed bottom-[74px] right-[50%] max-h-[90vh] h-[540px] w-[600px] max-w-[90vw] rounded-t-xl bg-mainColor/25 backdrop-blur-md drop-shadow-lg z-[99999] text-center flex justify-between items-center flex-col`}
      >
        <div id="top" className="relative w-full h-[50px] flex items-center justify-between mt-6 px-6">
          <form onSubmit={handleSubmit} className="relative bg-gradient-to-l from-sky-300 to-sky-500/50 w-full h-full rounded-md overflow-hidden p-2">
            <input required type="text" placeholder="Search" className="h-full w-full outline-none p-1 bg-primary/60" />
            <button type="submit" className="absolute top-[50%] right-3 -translate-y-[50%] bg-white text-black p-1 text-[18px] rounded-full">
              <MdSearch />
            </button>
          </form>
        </div>
        <div id="center" className="grid grid-cols-5 p-4 gap-2">
          {desktopPrograms.map(p => (
            <button
              className={``}
              key={p.name}
              onClick={() => { openProgram(p.name); setIsClicked("") }}
              id="desktop-btn"
            >
              <Image
                width={32}
                height={32}
                src={`/assets/os/icons/${p.name}.png`}
                alt={`${p.name} icon`}
              />
              <span>{p.name}</span>
            </button>
          ))}
          {startMenuPrograms.map(p => (
            <button
              className={``}
              key={p.name}
              onClick={() => { openProgram(p.name, true, p.icon); setIsClicked("") }}
              id="desktop-btn"
            >
              <Image
                width={32}
                height={32}
                src={`${p.icon}`}
                alt={`${p.name} icon`}
              />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
        <div
          id="bottom"
          className="bg-gradient-to-l from-sky-300 to-sky-500/50 w-full h-[50px] flex items-center justify-between p-6"
        >
          <div className="flex items-center justify-center gap-2 hover:bg-white/10 rounded-sm p-2 transition-all "><FaUserCircle className="text-[25px]" /><span>Sign in</span></div>
          <div id="power" className="relative" onMouseEnter={() => setPowerSettings(true)} onMouseLeave={() => setPowerSettings(false)}>
            <div className={`${powerSettings ? "h-fit p-2 " : "h-0"} transition-all w-[130px] bg-white drop-shadow-md rounded-md absolute bottom-[36px] right-[50%] translate-x-[50%] text-slate-900 flex items-start justify-center flex-col gap-1`}>
              {
                powerSettings &&
                <>
                  <button className="flex items-center gap-2 hover:bg-gray-400/20 w-full p-2 transition-all duration-75" onClick={() => { setWaitStartup(true); setOpenedPrograms([]) }}>
                    <RiRestartLine className="text-[18px]" />
                    <span className="text-[14px]">Restart</span>
                  </button>
                  <Link href={"/pc"} className="flex items-center gap-2 hover:bg-gray-400/20 w-full p-2 transition-all duration-75">
                    <MdPowerSettingsNew className="text-[18px]" />
                    <span className="text-[14px]">Power Off</span>
                  </Link>
                </>
              }
            </div>
            <button className="bg-white p-2 text-[20px] text-black rounded-md">
              <MdPowerSettingsNew />
            </button>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default StartMenu;



