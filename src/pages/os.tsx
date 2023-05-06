import { useEffect, useState } from 'react'

import MainParticles from '@/components/particles/MainParticles';
import { OsContainer, Startup } from '@/components/os'
import Head from 'next/head';

const os = () => {
    const [waitStartup, setWaitStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitStartup(false);
    }, 800);
  }, []);

  return (
    <div className="select-none">
       <Head>
        <title>Mohammad | OS</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      {waitStartup ? (
        <div onContextMenu={(e)=>e.preventDefault()}>
          <Startup />
          <MainParticles />
        </div>
      ) : (
        <OsContainer />
      )}
    </div>
  )
}

export default os