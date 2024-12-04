import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";

function App() {
  const ref = useRef();

  const { position, color, transparent, opacity, intensity } = useControls({
    position: {
      x: 0.5, y: 0.5, z: 0.5,
    },
    color: "#ff0000",
    opacity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transparent: true,
    intensity: {
      value: 0.5,
      min: 0,
      max: 20,
      step: 0.01,
    },
  })

  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
      {/*<axesHelper/>*/}
      <OrbitControls />
      <ambientLight intensity={intensity} />
      <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <boxGeometry />
        <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
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