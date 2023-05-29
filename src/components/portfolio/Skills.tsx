import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRouter } from 'next/navigation'

const skills = [
    {
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        title:"Javascript"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        title:"Typescript"
    },
    {
        img:"https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg",
        title:"Tailwind CSS"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/753/753244.png",
        title:"React.js"
    },
    {
        img:"https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
        title:"Next.js"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
        title:"Nodejs"
    },
    {
        img:"https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
        title:"Zustand"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
        title:"HTML"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/128/732/732190.png",
        title:"CSS"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/3103/3103968.png",
        title:"CLI"
    },
    {
        img:"https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        title:"Git"
    },
    {
        img:"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
        title:"Github"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        title:"Figma"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/128/2696/2696459.png",
        title:"Responsive web design"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/128/644/644667.png",
        title:"Translation into code"
    },

]

const Skills = () => {
    const router = useRouter();


  return (
    <Parallax pages={skills.length +4} id='skills-parallax' className='h-full bg-gradient-conic from-blue-500 via-cyan-500 to-blue-500 text-white' onClick={()=>router.push("#skills")}>
        <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center'>
          <p className='text_head'>Click then Scroll down</p>   
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: skills.length +1 }} className='flex items-center justify-start mx-8 md:mx-20' >
          <div className='flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 p-5 px-12 rounded-md' >
            {/* <img src="https://cdn-icons-png.flaticon.com/512/9375/9375367.png" width={80} height={80} alt="skills" /> */}
            <p className='text-6xl'>Skills</p>
          </div>
        </ParallaxLayer>

    {skills.map((skill,index)=>(
        <ParallaxLayer offset={index + 1.5} speed={0.5} className='flex items-center justify-end text-slate-900' >
          <div className='flex items-center justify-center gap-3 font-semibold bg-gradient-to-bl from-gray-50 via-gray-200 to-gray-50 p-4 px-8 rounded-md drop-shadow-md mr-[25vw]'>
            <img src={skill.img} width={40} height={40} alt={skill.title} />
            <p>{skill.title}</p>
          </div>
        </ParallaxLayer>
    ))}
<ParallaxLayer offset={skills.length + 3} speed={0.5} className='flex items-center justify-center'>
<p className='text_head'>Click to exit</p>   
</ParallaxLayer>

    </Parallax>
  )
}

export default Skills