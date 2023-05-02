import { useProgress } from "@react-three/drei";
import Fetching from "./Fetching";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div className="z-50 items-center justify-center flex bg-primary h-screen w-screen">
      <Fetching progress={progress.toFixed(1)}/>
    </div>
  );
};

export default Loader;
