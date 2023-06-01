import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { projects } from "../../../constants";
import Link from "next/link";
import Image from "next/image";

const Projects = ({ isPage }: { isPage?: boolean }) => {
  const router = useRouter();

  return (
    <div
      className="relative h-full p-2 md:px-10 px-8 pb-8 bg-gradient-radial from-[#1e0d48] via-[#100628] to-[#090316] text-white bg-cover duration-500 transition-all overflow-x-hidden"
      onClick={() => router.push("#projects")}
    >
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="text_head">Projects</h1>
        {
          !isPage &&
          <h1 className="desc ml-[40%]" style={{ color: "white" }}>Click then scroll down</h1>
        }
      </div>

<div className="lg:grid lg:grid-cols-2 flex flex-col gap-10 items-center justify-between w-full">
      {projects.map((p)=>(
      <div key={p.title} className="bg-[#1f0b4e] p-3 w-[500px] max-w-full h-fit drop-shadow-xl backdrop-blur-md gap-2 flex items-center justify-center flex-col rounded-xl">

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="mySwiper max-w-[90%]"
        >
          {p.imgs.map((img)=>(
          <SwiperSlide key={img.src}>
            <div className="w-full">
              <img
                src={`/assets/projects/${p.title}/${img.src}`}
                alt={`${"Co-Student" + " | Grade Feed"}`}
                className="w-full h-full rounded-t-lg "
              />
              <span className="text-lg text-slate-900 w-full text-center block pt-1 bg-white p-1 rounded-b-lg">
                {img.title}
              </span>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>

        <div className="p-4 pb-0 flex items-start w-full gap-1 flex-col">
          
          {p.hasDomain ? 
          <Link href={p.demo || ""} target="_blank" className="flex items-end text-white">
          <h4 className="text-2xl font-bold">{p.title.toUpperCase()}</h4>
          <span>.com</span>
          </Link>
          :
          <h4 className="text-2xl font-bold">{p.title.toUpperCase()}</h4>
          }
          <p className="text-lg text-gray-200 max-w-2xl">
            {p.desc}
          </p>
          <div className="p-2 flex items-center justify-center gap-5 mx-auto">
            {p.demo &&
            <Link href={p.demo} target="_blank" className="opacity-95">
              <img src="/assets/icons/demo.png" alt="demo" width={55} className="rounded-full" />
            </Link>
            }
            {p.github &&
              <Link href={p.github} target="_blank" className="opacity-95">
              <img src="/assets/icons/github.png" alt="github" width={55} className="rounded-full" />
            </Link>}
          </div>

          <div className="flex items-center gap-2">
            {p.tags.map((tag)=>(
              <span key={tag.name} className={tag.color} >#{tag.name}</span>
            )
            )}
          </div>
        </div>
      </div>
      ))}
</div>

        <div className="w-full h-screen text_head items-center justify-center flex">
      {
        !isPage &&
          <h1>Click to exit</h1>
        }
        </div>
    </div>
  );
};

export default Projects;

// card
{
  /* <div className='h-full grid md:p-10 p-5 bg-gradient-radial from-slate-500 via-slate-600 to-slate-700 text-white bg-cover grayscale-[0.5] hover:grayscale-0 duration-500 transition-all' style={{backgroundImage:"url({`/assets/projects/${"co-student/1"}`})"}} onClick={()=>router.push("#projects")}>
      <div className='h-[400px] w-[300px] bg-white/60 backdrop-blur-sm rounded-md drop-shadow-lg text-slate-900 flex items-center justify-between flex-col overflow-hidden'>
        <div className='flex-1 max-h-[50%] max-w-full overflow-hidden'>
          <img src={`/assets/projects/co-student.jpg`} alt={`co-student`} className='w-full object-cover' />
        </div>

        <div className='flex-1 flex flex-col px-7 pt-4 gap-2'>
          <div>
          <h4 className='text-xl font-bold'>Co-Student</h4>
          <h4 className='text-sm text-gray-700 font-light leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a, ut ad iusto delectus repellendus error blanditiis saepe nostrum molestiae.</h4>

          </div>
          
          <Link href={`https://www.co-student.com`} target='_blank' className='p-3 px-5 w-fit -mb-3 bg-gradient-to-r from-green-600 to-green-500 opacity-90 hover:opacity-100 rounded-md transition-all text-white'>
            Demo
          </Link>
        </div>
      </div>
    </div> */
}
