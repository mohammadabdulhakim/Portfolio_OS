import { useEffect, useState } from "react";
import { OsContainer, Startup } from "../components/os"
import {MainParticles} from "../components";

const Os = () => {
    const [waitStartup, setWaitStartup] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setWaitStartup(false)
        },8000)
    },[])

  return (
    <div>
        {waitStartup ?
        <>
        <Startup />
        <MainParticles/>
        </>
        :
          <OsContainer />
        }
    </div>
  )
}

export default Os