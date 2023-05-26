"use client";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";

import {CgScrollV} from "react-icons/cg"

const portfolioNavLinks = [
  {
    title:"Skills",
    link:"#skills"
  },
  {
    title:"Projects",
    link:"#projects"
  },
  {
    title:"Articles",
    link:"#articles"
  },
  {
    title:"Resume",
    link:"#resume"
  },
  {
    title:"Contact",
    link:"#contact"
  },
]
const PortfolioPage = () => {
  const propsConfig = { mass: 5, tension: 2000, friction: 200 };

  const startWithProps = useSpring({
    ...propsConfig,
    delay: 1600,
    from: { opacity: 0, height: "0" },
    to: { opacity: 1, height: "52px" },
  });

  const navProps = useSpring({
    ...propsConfig,
    delay:500,
    from: { opacity: 0, width: "0" },
    to: { opacity: 1, width: "400px " },
  });

  const justProps = useSpring({
    ...propsConfig,
    delay: 2800,
    from: { opacity: 0, height: "0" },
    to: { opacity: 1, height: "65px" },
  });
  const scrollProps = useSpring({
    ...propsConfig,
    delay: 3500,
    from: { opacity: 0, height: "0" },
    to: { opacity: 1, height: "52px" },
  });

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Mohammad | Portfolio</title>
      </Head>
      <div className="flex items-center justify-evenly h-screen w-screen flex-col">
        <div className="flex items-center flex-col justify-center gap-6">
          <animated.h1
            className={"blue_gradient text_head"}
            style={startWithProps}
          >
            Start With
          </animated.h1>
          <animated.div style={navProps} className={`p-3 bg-white drop-shadow-md gap-5 flex items-center justify-center px-8`}>
            {portfolioNavLinks.map((nLink)=>(
            <Link key={nLink.link} href={`${nLink.link}`} className="text-blue-900 opacity-80 hover:opacity-100 transition-all font-medium">
              {nLink.title}
            </Link>
            ))}
          </animated.div>
        </div>
      <div className="flex flex-col items-center justify-center gap-2">
          <animated.h1 style={justProps} className="text_head orange_gradient">
            Or you can just
          </animated.h1>
          <animated.div style={scrollProps} className="text-slate-700 text-3xl flex items-center justify-center gap-2">
            <span>
            Scroll down
            </span> 
            <CgScrollV className="bg-white p-1.5 rounded-2xl text-4xl drop-shadow-md" />
          </animated.div>
      </div>
      </div>

    </div>
  )
}

export default PortfolioPage