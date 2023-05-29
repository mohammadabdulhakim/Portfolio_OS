import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const Projects = ({ isPage }: { isPage?: boolean }) => {
  const router = useRouter();

  return (
    <div
      className="relative h-full p-2 md:px-60 px-8 bg-gradient-radial from-sky-500 via-sky-800 to-sky-900 text-white bg-cover duration-500 transition-all overflow-x-hidden"
      onClick={() => router.push("#projects")}
    >
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="text_head">Projects</h1>
        {
          !isPage &&
          <h1 className="desc ml-[40%]" style={{ color: "white" }}>Click then scroll down</h1>
        }
      </div>

      <div className="bg-slate-200/60 p-2 drop-shadow-lg backdrop-blur-md h-fit gap-3 flex items-center justify-center flex-col rounded-xl">
        <h1 className="text_head yellow_gradient">Co-Student</h1>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper max-w-[60%] max-h-[65%]"
        >
          <SwiperSlide>
            <div className="w-full">
              <img
                src={`/assets/projects/${"co-student/1"}.png`}
                alt={`${"Co-Student" + " | Grade Feed"}`}
                className="w-full h-full rounded-t-lg "
              />
              <span className="text-lg text-slate-900 w-full text-center block mt-1 bg-white p-1 rounded-b-lg">
                Grade Feed
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`/assets/projects/${"co-student/2"}.png`}
              alt={``}
              className="w-full h-full rounded-lg "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`/assets/projects/${"co-student/3"}.png`}
              alt={``}
              className="w-full h-full rounded-lg "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`/assets/projects/${"co-student/4"}.png`}
              alt={``}
              className="w-full h-full rounded-lg "
            />
          </SwiperSlide>
        </Swiper>

        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta
          voluptas mollitia consequatur cum, repellat est inventore sit,
          doloribus hic incidunt obcaecati dolorum, molestiae autem aliquid
          saepe eos sint laudantium!
        </p>
        <div className="p-2 flex items-center justify-center gap-5">
          <button type="button" className="btn">
            Demo
          </button>
          <button type="button" className="btn_outline">
            Github
          </button>
        </div>
      </div>

      {
        !isPage &&
        <div className="w-full h-screen text_head items-center justify-center flex">
          <h1>Click to exit</h1>
        </div>
      }
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
