import { useRouter } from 'next/navigation'
import React from 'react'

const Projects = () => {
  const router = useRouter();

  return (
    <div className='h-full bg-gradient-radial from-slate-500 via-slate-600 to-slate-700 text-white' onClick={()=>router.push("#projects")}>
      
    </div>
  )
}

export default Projects