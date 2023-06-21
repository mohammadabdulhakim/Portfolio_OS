import { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import MainParticles from "@/components/particles/MainParticles";
import { OsContainer, Startup } from "@/components/os";
import Head from "next/head";

const Os = () => {
  const [waitStartup, setWaitStartup] = useState(false);
  const [askedForScreen, setAskedForScreen] = useState(false);

  const fullScreenHandle = useFullScreenHandle();

  useEffect(() => {
    if (waitStartup) {
      setTimeout(() => {
        setWaitStartup(false);
      }, 8000);
    }
  }, [waitStartup]);

  const handleClick = () => {
    setAskedForScreen(true);
    setWaitStartup(true);
  };

  return (
    <div className="select-none bg-gradient-radial from-neutral-700 via-neutral-800 to-neutral-950 w-screen h-screen">
      <Head>
        <title>OS | Mohammad AbdulHakim | abomisr</title>
        <meta name="description" content="Awesome OS system with apps [Chrome, Edge, VScode, Appearance, Articles and much more]. Mohammad AbdulHakim" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </Head>
      <FullScreen handle={fullScreenHandle}>
        {!askedForScreen ? (
          <div className="text-white bg-primary absolute bottom-[50%] translate-y-[50%] left-[50%] -translate-x-[50%] w-fit p-4 rounded-xl flex items-center justify-center flex-col gap-6">
            <h2 className="text-center ">Would you like to switch to full-screen mode for optimal viewing and usability? Please note that there is a sound effect during startup.</h2>
            <div className="flex items-center justify-evenly w-full">
              <button id="btn1" className="w-[100px]"
                onClick={() => {
                  fullScreenHandle.enter();
                  handleClick();
                }}
              >
                Yes
              </button>
              <button id="btn1" className="w-[100px]" onClick={handleClick}>No</button>
            </div>
          </div>
        ) : (
          <>
            {waitStartup ? (
              <div onContextMenu={(e) => e.preventDefault()}>
                <Startup />
                <MainParticles />
              </div>
            ) : (
              <OsContainer setWaitStartup={setWaitStartup} />
            )}
          </>
        )}
      </FullScreen>
    </div>
  );
};

export default Os;
