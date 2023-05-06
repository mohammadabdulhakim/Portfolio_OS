import { osBgSrcs } from "../../../../constants/index.mjs"
import { useOsStore } from "../../../../libs/osStates"

const Appearance = () => {
    const {bgSrc,setBgSrc} = useOsStore();

  return (
    <div className="overflow-y-scroll grid grid-cols-2 w-full h-full p-4 gap-3" style={{backgroundImage:`url(${bgSrc})`,backgroundSize:"cover"}}>
        {osBgSrcs.map((src)=>(
            <div className="w-[250px] flex items-center justify-center flex-col bg-[#ffffff1b] p-2 gap-2">
                <img src={src} alt="bg" className="w-full h-full object-cover" />
                <button onClick={()=>setBgSrc(src)} className="bg-slate-500 w-full rounded-md">Set as wallpaper</button>
            </div>
        ))}
    </div>
  )
}

export default Appearance