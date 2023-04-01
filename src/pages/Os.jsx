import { useEffect, useState } from "react";
import { Startup } from "../components"

const Os = () => {
    const [waitStartup, setWaitStartup] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setWaitStartup(false)
        },6500)
    },[])

  return (
    <div>
        {waitStartup && <Startup />}
    </div>
  )
}

export default Os