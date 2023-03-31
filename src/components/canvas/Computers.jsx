import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";


const Computers = ({isPhone,lightsOn,isComputerOn}) => {
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

const ComputersCanvas = ({isPhone,lightsOn,isComputerOn}) => {

  const deg2rad = degrees => degrees * (Math.PI / 180);


  useEffect(()=>{
    useThree(({camera}) => {
      camera.rotation.set(deg2rad(30), 0, 0);
    });
  },[isComputerOn])

  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [4, 3, 5],rotation: [Math.PI /2,0,0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls
        enabled={!isComputerOn}
          // enableRotate={!isComputerOn}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isPhone={isPhone} lightsOn={lightsOn} isComputerOn={isComputerOn} />

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
