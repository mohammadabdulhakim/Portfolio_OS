import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Projects = () => {
  const router = useRouter();

  return (
    <div className='h-full grid md:p-10 p-5 bg-gradient-radial from-slate-500 via-slate-600 to-slate-700 text-white bg-cover grayscale-[0.5] hover:grayscale-0 duration-500 transition-all' style={{backgroundImage:"url('/assets/mosque.jpg')"}} onClick={()=>router.push("#projects")}>
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
    </div>
  )
}

export default Projects