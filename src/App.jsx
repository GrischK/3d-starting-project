import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const { lightColor, distance, lightIntensity, decay } = useControls({
    lightColor: "#ff0000",
    distance: 3,
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 20,
      step: 0.01,
    },
    decay: 2,
  });
  return (
    <>
      <pointLight ref={ref} position={[2, 1, 0]} intensity={lightIntensity} decay={decay} color={lightColor}
                  distance={distance}
      />
    </>
  )
}


function App() {
  const ref = useRef();

  const { position, color, transparent, opacity, lightIntensity, lightColor } = useControls({
    position: {
      x: 0.5, y: 0.5, z: 0.5,
    },
    color: "#ff0000",
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transparent: false,
  })


  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
      {/*<axesHelper/>*/}
      <OrbitControls />
      <Lights />
      {/*<ambientLight intensity={lightIntensity} color={lightColor} />*/}
      {/*<directionalLight intensity={lightIntensity} color={lightColor} position={[3, 3, 3]} />*/}
      <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <boxGeometry />
        <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={0}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <Grid
        sectionSize={3}
        sectionColor={"purple"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
    </Canvas>
  );
}

export default App;