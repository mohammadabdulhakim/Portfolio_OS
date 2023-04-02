import { useEffect } from "react";
import { osBgSrcs } from "../../constants";
import { useOsStore } from "../../store/osStates";
import Navbar from "./Navbar";

const OsContainer = () => {
  const { bgSrc, setBgSrc } = useOsStore();

  useEffect(() => {
    setBgSrc(osBgSrcs[0])
  }, []);

  return (
    <div
      className="h-screen w-screen"
      style={{ backgroundImage: `url(${bgSrc})`,backgroundSize:"cover"}}
    >
        <Navbar />
    </div>
  );
};

export default OsContainer;
