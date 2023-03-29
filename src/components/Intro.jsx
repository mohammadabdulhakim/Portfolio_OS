
import { ComputersCanvas } from "./canvas";
import MainParticles from "./MainParticles";
import { useEffect, useState } from "react";

const Intro = () => {
  const [isPhone, setIsPhone] = useState(null);

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
    <section className="w-full h-screen relative mx-auto">
      <MainParticles />
      <ComputersCanvas isPhone={isPhone} />
      {/* <LampCanvas />  */}
    </section>
  );
};

export default Intro;
