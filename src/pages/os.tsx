import { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import MainParticles from "@/components/particles/MainParticles";
import { OsContainer, Startup } from "@/components/os";
import Head from "next/head";

const os = () => {
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
    <div className="select-none">
      <Head>
        <title>Mohammad | OS</title>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </Head>
      <FullScreen handle={fullScreenHandle}>
        {!askedForScreen ? (
          <div className="bg-primary absolute bottom-[50%] translate-y-[50%] left-[50%] -translate-x-[50%] w-fit p-4 rounded-xl flex items-center justify-center flex-col gap-6">
            <h2 className="text-center ">Would you like to open the application in full-screen mode? This is the recommended setting for optimal viewing and usability.</h2>
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
              <OsContainer />
            )}
          </>
        )}
      </FullScreen>
    </div>
  );
};

export default os;
