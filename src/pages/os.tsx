import { useEffect, useState } from 'react'

import MainParticles from '@/components/particles/MainParticles';
import { OsContainer, Startup } from '@/components/os'
import Head from 'next/head';

const os = () => {
    const [waitStartup, setWaitStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitStartup(false);
    }, 8000);
  }, []);

  return (
    <div className="select-none">
       <Head>
        <title>Mohammad | OS</title>
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