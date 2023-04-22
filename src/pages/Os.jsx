import { useEffect, useState } from "react";
import { OsContainer, Startup } from "../components/os";
import { MainParticles } from "../components";

const Os = () => {
  const [waitStartup, setWaitStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitStartup(false);
    }, 800);
  }, []);

  return (
    <div className="select-none">
      {waitStartup ? (
        <>
          <Startup />
          <MainParticles />
        </>
      ) : (
        <OsContainer />
      )}
    </div>
  );
};

export default Os;

/* 
import { FullScreen, useFullScreenHandle } from "react-full-screen";


---

const videoScreen = useFullScreenHandle();
videoScreen.enter()

---

<FullScreen handle={videoScreen}>
  {Content}
</FullScreen>
*/
