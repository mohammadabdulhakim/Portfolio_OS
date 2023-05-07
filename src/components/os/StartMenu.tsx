import { useSpring, animated } from "@react-spring/web";
import { useOsStore } from "../../../libs/osStates";

const StartMenu = () => {
  const {setIsClicked} = useOsStore()
  const [props] = useSpring(
    () => ({
      from: { opacity: 0, y: "100%", x: "50%" },
      to: { opacity: 1, y: "0" },
    }),
    []
  );

  return (
    <>
    <span className="block top-0 fixed right-0 bg-black/5 backdrop-blur-sm h-screen w-screen z-[99998]" onClick={()=>setIsClicked("")}></span>
    <animated.div
      style={props}
      className={`fixed bottom-[50px] right-[50%] max-h-[90vh] h-[540px] w-[600px] max-w-[90vw] rounded-t-xl bg-mainColor/25 backdrop-blur-md drop-shadow-lg z-[99999] text-center`}
    >
      <span className="text-[60px]">
      بسم الله الرحمن الرحيم

      </span>
    </animated.div>
    </>
  );
};

export default StartMenu;
