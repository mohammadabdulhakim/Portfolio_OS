import { useEffect, useState } from 'react'

import MainParticles from '@/components/particles/MainParticles';
import { OsContainer, Startup } from '@/components/os'

const os = () => {
    const [waitStartup, setWaitStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitStartup(false);
    }, 8000);
  }, []);

  return (
    <div className="select-none">
      {waitStartup ? (
        <>
          <Startup />
          <MainParticles />
        </>
      ) : (
        <OsContainer />
      )}
    </div>
  )
}

export default os