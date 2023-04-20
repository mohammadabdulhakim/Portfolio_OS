import { useEffect } from "react"
import { pcText, pcCircle, pcPyLeft, pcPyRight } from "/public/assets/pcStartUpFiles"
import "./supAnimations.css"

const Startup = () => {

    useEffect(()=>{
        const audio = new Audio("/assets/sounds/windowsXpStartup.mp3")
        setTimeout(()=>{
            audio.play()
        },2000)
    },[])

  return (
    <div id="startup-container" className="w-screen h-screen overflow-hidden">
        <img id="logo-circle" src={pcCircle} className="" />        
        <img id="logo-pyLeft" src={pcPyLeft} className="" />        
        <img id="logo-pyRight" src={pcPyRight} className="" />
        <img id="logo-text" src={pcText} />
        {/* <p id="logo-name" className="fixed bottom-[calc(50vw-100px)] translate-x-[50%] right-[50%] text-[calc(10vw/4.4)]">Mohammad AbdulHakim</p>     */}
    </div>
  )
}

export default Startup