import Image from "next/image"
import { animated, useSpring } from "@react-spring/web"
import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "../../constants";
import { MdEmail } from "react-icons/md";


const index = () => {
  const propsConfig = { mass: 5, tension: 2000, friction: 200 };

  const picAnimations = useSpring({
    ...propsConfig,
    delay: 500,
    from: { opacity: "0" },
    to: { opacity: "100%" },
  });
  const nameAnimations = useSpring({
    ...propsConfig,
    delay: 1600,
    from: { opacity: 0, height: "0" },
    to: { opacity: 1, height: "40px" },
  });
  const descAnimations = useSpring({
    ...propsConfig,
    delay: 2100,
    from: { opacity: 0, height: "0" },
    to: { opacity: 1, height: "28px" },
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center transition-all overflow-hidden">
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 w-[60%]">
        <div className="relative mb-8">
          <div className="links-circle w-full h-full rounded-full block absolute z-0 text-neutral-700">
            <Link href={socialLinks.devToLink} target="_blank" className="hover:text-neutral-900 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%]">
              <FaDev size={50} />
            </Link>
            <Link href={socialLinks.linkedinLink} target="_blank" className="hover:text-neutral-900 absolute top-0 right-0 translate-x-[50%] -translate-y-[50%]">
              <FaLinkedin size={50} />
            </Link>
            <Link href={socialLinks.githubLink} target="_blank" className="hover:text-neutral-900 absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%]">
              <FaGithubSquare size={50} />
            </Link>
            <Link href={"/portfolio/contact"} target="_blank" className="hover:text-neutral-900 absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]" >
              <MdEmail size={50}/>
            </Link>
          </div>
          <animated.div style={picAnimations} className="z-10">
            <Image src={"/favicon.ico"} alt="Mohammad AbdulHakim" width={160} height={160} className="select-none" />
          </animated.div>
        </div>
        <div>
          <animated.div style={nameAnimations} className="text-4xl font-semibold text-center" >
            Mohammad AbdulHakim
          </animated.div>
          <animated.div style={descAnimations} className="text-xl text-neutral-700 text-center" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius neque perferendis quaerat corrupti, ipsum maxime quam perspiciatis accusamus praesentium delectus!
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default index