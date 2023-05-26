import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesOptions from "./particlesIntroBg.json";
import { Engine } from "tsparticles-engine";


const MainParticles = () => {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  let options: any = particlesOptions

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default MainParticles;
