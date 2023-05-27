import { useRouter } from 'next/navigation'

const Projects = () => {
  const router = useRouter();

  return (
    <div className='h-full bg-gradient-radial from-slate-500 via-slate-600 to-slate-700 text-white bg-cover grayscale hover:grayscale-0 duration-500 transition-all' style={{backgroundImage:"url('/assets/mosque.jpg')"}} onClick={()=>router.push("#projects")}>
      
    </div>
  )
}

export default Projects