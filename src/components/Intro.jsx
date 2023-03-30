
import { ComputersCanvas } from "./canvas";
import MainParticles from "./MainParticles";
import { useEffect, useState } from "react";

const Intro = () => {
  const [isPhone, setIsPhone] = useState(null);
  const [lightsOn, setLightsOn] = useState(false);

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


  return (
    <section className="w-full h-screen relative mx-auto overflow-hidden">
      {!lightsOn &&
        <div className="flex justify-center items-center">
        <button className="z-[3] bottom-[50%] right-[50%] absolute translate-x-[50%] translate-y-[50%]" onClick={()=>{setLightsOn(!lightsOn)}}>Lights On</button>
        <span className="h-screen w-screen absolute bg-[#00000022] backdrop-blur-sm top-0 left-0 z-[2]"></span>
      </div>}
      <MainParticles />
      <ComputersCanvas lightsOn={lightsOn} isPhone={isPhone} />
      {/* <LampCanvas />  */}
    </section>
  );
};

export default Intro;
