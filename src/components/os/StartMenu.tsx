import { useSpring, animated } from "@react-spring/web";
import { MdPowerSettingsNew } from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { useState } from "react";

import { useOsStore } from "../../../libs/osStates";

const StartMenu = () => {
  const [powerSettings, setPowerSettings] = useState(false)
  const { setIsClicked } = useOsStore();
  const [props] = useSpring(
    () => ({
      from: { opacity: 0, y: "100%", x: "50%" },
      to: { opacity: 1, y: "0" },
    }),
    []
  );

  const powerBtnS = [
    {
      title:"Restart",
      icon:RiRestartLine
    },
    {
      title:"Power Off",
      icon:MdPowerSettingsNew
    },
  ]

  return (
    <>
      <span
        className="block top-0 fixed right-0 bg-black/5 backdrop-blur-sm h-screen w-screen z-[99998]"
        onClick={() => setIsClicked("")}
      ></span>
      <animated.div
        style={props}
        className={`fixed bottom-[50px] right-[50%] max-h-[90vh] h-[540px] w-[600px] max-w-[90vw] rounded-t-xl bg-mainColor/25 backdrop-blur-md drop-shadow-lg z-[99999] text-center flex justify-between items-center flex-col`}
      >
        <div id="top"></div>
        <div id="center"></div>
        <div
          id="bottom"
          className="bg-gradient-to-l from-sky-300 to-sky-500/50 w-full h-[50px] flex items-center justify-between p-6"
        >
          <div></div>
          <div id="power" className="relative" onMouseEnter={()=>setPowerSettings(true)} onMouseLeave={()=>setPowerSettings(false)}>
            <div className={`${powerSettings? "h-fit p-2 ":"h-0"} transition-all w-[130px] bg-white drop-shadow-md rounded-md absolute bottom-[36px] right-[50%] translate-x-[50%] text-slate-900 flex items-start justify-center flex-col gap-1`}>
              {
                powerSettings && powerBtnS.map((btn)=>(
                  <button key={btn.title} className="flex items-center gap-2 hover:bg-gray-400/20 w-full p-2 transition-all duration-75">
                    <btn.icon className="text-[18px]" />
                    <span className="text-[14px]">{btn.title}</span>
                  </button>
                ))
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
