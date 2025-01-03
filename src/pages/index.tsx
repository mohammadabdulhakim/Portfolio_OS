import Image from "next/image"
import { animated } from "@react-spring/web"
import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "../../constants";
import { MdEmail } from "react-icons/md";
import { opacityAnimation, textAnimation } from "../../utils/animationProps";
import MainNavbar from "@/components/MainNavbar";
import Head from "next/head";


const index = () => {

  return (
    <>
    <Head>
      <title>Mohammad AbdulHakim</title>
      <meta name="keywords" content="abomisr, mohammad abdulhakim, AboMisr, Frontend, full-stack" />
      <meta name="description" content="Welcome to my website! I invite you to explore and discover more about me. From my skills and expertise to my projects and experiences, there's a lot to uncover. Whether you're a potential employer, colleague, or simply curious, I hope you'll find my website informative and engaging. Thank you for visiting!" />
    </Head>
    <div className="w-screen h-screen flex items-center justify-center transition-all overflow-x-hidden p-4">
      <MainNavbar />
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:w-[60%] w-full">
        <div className="relative mb-8">
          <animated.div style={opacityAnimation(300)} className="z-10">
            <Image src={"/favicon.ico"} alt="Mohammad AbdulHakim" width={160} height={160} className="select-none" />
          </animated.div>
        </div>
        <div className="h-fit flex  justify-center flex-col">
          <animated.div style={textAnimation(800, "40px")} className="text-2xl font-semibold text-start md:ml-20" >
            Hello There,
          </animated.div>
          <animated.div style={textAnimation(1200, "40px")} className="text-3xl font-semibold text-center" >
            I&apos;m Mohammad AbdulHakim 
            <span className="text-[15px] font-normal">
              {" "}Frontend web developer
            </span>
          </animated.div>
          <animated.div style={textAnimation(1600, "28px")} className="text-lg sm:text-xl text-gray-800 text-center md:mt-0 mt-14" >
            This is just a welcome page. You can visit{" "}
            <Link className="text-blue-600" href={`/portfolio`}>
              my portfolio{" "}
            </Link>
            to view the following sections:{" "}
            <Link className="text-blue-600" target="_blank" href={`/portfolio/skills`}>
              Skills
            </Link>
            ,{" "}
            <Link className="text-blue-600" target="_blank" href={`/portfolio/projects`}>
              Projects
            </Link>
            ,{" "}
            {/* <Link className="text-blue-600" target="_blank" href={`/portfolio/articles`}>
              Tech Articles
            </Link>
            ,{" "} */}
            <Link className="text-blue-600" target="_blank" href={`/assets/cv.pdf`} download={"Mohammad-AbdulHakim-CV.pdf"}>
              Resume
            </Link>
            , and{" "}
            <Link className="text-blue-600" target="_blank" href={`/portfolio/contact`}>
              Contact
            </Link>
            . You can also explore This{" "}
            <Link className="text-blue-600" target="_blank" href={`/pc`}>
              interactive PC
            </Link>
            {" "}and surf its{" "}
            <Link className="text-blue-600" href={`/pc/os`}>
              operating system
            </Link>
            {" "}to get a glimpse of my technical abilities. If you have any questions or comments, please feel free to contact me at{" "}
            <Link className="text-blue-600" href={"mailto:0mohammedabdulhakim@gmail.com"}>
            0mohammedabdulhakim@gmail.com
            </Link>
            .
          </animated.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index