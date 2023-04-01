
import { addBtnSound } from "../utils/functions";
import { ComputersCanvas } from "./canvas";
import MainParticles from "./MainParticles";
import { useEffect, useState } from "react";

const Intro = () => {
  const [isPhone, setIsPhone] = useState(null);
  const [lightsOn, setLightsOn] = useState(false);
  const [isComputerOn, setIsComputerOn] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsPhone(mediaQuery.matches);
    const handleChangeMediaQuery = (e) => {
      setIsPhone(e.matches);
    };
    mediaQuery.addEventListener("change", handleChangeMediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleChangeMediaQuery);
    };
  }, []);

  useEffect(()=>{
    addBtnSound()
  },[lightsOn])
  
  return (
    <section className="w-full h-screen relative mx-auto overflow-hidden">
      {!lightsOn &&
        <div className="flex justify-center items-center absolute h-screen w-screen top-0 right-0">
        <button id="btn1" className="z-[3] w-40 h-14" onClick={()=>{setLightsOn(!lightsOn)}}>Lights On</button>
        <span className="h-screen w-screen absolute bg-[#00000022] backdrop-blur-[2px] top-0 left-0 z-[2]"></span>
      </div>}
      {lightsOn && !isComputerOn && <button id="btn1" onClick={()=>{setIsComputerOn(!isComputerOn)}} className="z-[3] absolute h-14 w-48 bottom-[6%] right-[50%] translate-x-[50%]">Turn on this pc</button>}
      <MainParticles />
      <ComputersCanvas lightsOn={lightsOn} isPhone={isPhone} isComputerOn={isComputerOn} />
      {/* <LampCanvas />  */}
    </section>
  );
};

export default Intro;
