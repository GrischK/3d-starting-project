import { Canvas } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";

function App() {
  const ref = useRef();

  const { position } = useControls({
    position: {
      x: 0, y: 0, z: 0,
    }
  })

  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
      {/*<axesHelper/>*/}
      <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <boxGeometry />
        <meshNormalMaterial />
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