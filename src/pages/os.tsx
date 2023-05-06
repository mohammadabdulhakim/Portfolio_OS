import { useEffect, useState } from "react";

import MainParticles from "@/components/particles/MainParticles";
import { OsContainer, Startup } from "@/components/os";
import Head from "next/head";

const os = () => {
  const [waitStartup, setWaitStartup] = useState(true);

  useEffect(() => {
    if (waitStartup) {
      setTimeout(() => {
        setWaitStartup(false);
      }, 800);
    }
  }, [waitStartup]);

  return (
    <div className="select-none">
      <Head>
        <title>Mohammad | OS</title>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </Head>
      {waitStartup ? (
        <div onContextMenu={(e) => e.preventDefault()}>
          <Startup />
          <MainParticles />
        </div>
      ) : (
        <OsContainer />
      )}
    </div>
  );
};

export default os;
