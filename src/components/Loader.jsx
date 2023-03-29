import { Html, useProgress } from "@react-three/drei";
import Fetching from "./Fetching";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <Fetching progress={progress.toFixed(1)}/>
    </Html>
  );
};

export default Loader;
