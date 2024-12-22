import { Suspense, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { ComputersCanvas, CursorLight, Loader } from "@/components";
import MainParticles from "@/components/particles/MainParticles";
// import { addBtnSound } from "../../../utils/functions";

export default function Home() {
  const [isPhone, setIsPhone] = useState<boolean | null>(null);
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsPhone(mediaQuery.matches);
    const handleChangeMediaQuery = (e: MediaQueryListEvent) => {
      setIsPhone(e.matches);
    };
    mediaQuery.addEventListener("change", handleChangeMediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleChangeMediaQuery);
    };
  }, []);

  // useEffect(() => {
  //   addBtnSound();
  // }, [lightsOn, isPhone]);

  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>PC | Mohammad AbdulHakim | AboMisr</title>
        <meta name="description" content="Amazing pc among stars with an awesome OS system. Mohammad AbdulHakim" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between relative bg-primary text-white`}
      >
        <section className="w-full h-screen relative mx-auto overflow-hidden">
          <CursorLight />
          {!lightsOn && (
            <div className="flex justify-center items-center absolute h-screen w-screen top-0 right-0">
              <button
                id="btn1"
                className="z-[3] w-40 h-14"
                onClick={() => {
                  setLightsOn(!lightsOn);
                }}
              >
                Lights On
              </button>
              <span className="h-screen w-screen absolute bg-[#00000022] backdrop-blur-[2px] top-0 left-0 z-[2]"></span>
            </div>
          )}
          {lightsOn && (
            <div className="absolute bottom-[6%] right-[50%] translate-x-[50%] z-[3] flex justify-evenly w-screen">
              <Link
                href={"/pc/os"}
                id="btn1"
                className="h-14 w-48"
              >
                <span>
                Turn on this pc
                </span>
              </Link>
              <Link
                id="btn1"
                href="/portfolio"
                className="h-14 w-48"
              >
                <span>
                Portfolio
                </span>
              </Link>
            </div>
          )}
          <MainParticles />
          <ComputersCanvas lightsOn={lightsOn} isPhone={isPhone} />
          {/* <LampCanvas />  */}
        </section>
      </main>
    </Suspense>
  );
}
