import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


const Computers = ({isPhone,lightsOn}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {lightsOn &&
      <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      </>
      }
      <primitive
        object={computer.scene}
        scale={isPhone? 0.7 : 0.75}
        position={isPhone? [0, -2, -2.2]:[0, -2.5, -1.5]}
        relation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({isPhone,lightsOn}) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isPhone={isPhone} lightsOn={lightsOn} />

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
