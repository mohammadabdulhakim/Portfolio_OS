import Image from "next/image"
import { useEffect } from "react"


const Startup = () => {

    useEffect(()=>{
        const audio = new Audio("./assets/sounds/windowsXpStartup.mp3")
        setTimeout(()=>{
            audio.play()
        },2000)
    },[])


    return (
    <div id="startup-container" className={`w-screen h-screen overflow-hidden`} >
        <img alt={"logo-circle | Mohammad AbdulHakim"} id="logo-circle" src={"/assets/pcStartUpFiles/pc_bg-circle.png"} className="" />        
        <img alt={"logo-pyLeft | Mohammad AbdulHakim"} id="logo-pyLeft" src={"/assets/pcStartUpFiles/pc_bg-left.png"} className="" />        
        <img alt={"logo-pyRight | Mohammad AbdulHakim"} id="logo-pyRight" src={"/assets/pcStartUpFiles/pc_bg-right.png"} className="" />
        <img alt={"logo-text | Mohammad AbdulHakim"} id="logo-text" src={"/assets/pcStartUpFiles/pc_bg-text.png"} />
        {/* <p id="logo-name" className="fixed bottom-[calc(50vw-100px)] translate-x-[50%] right-[50%] text-[calc(10vw/4.4)]">Mohammad AbdulHakim</p>     */}
    </div>
  )
}

export default Startup