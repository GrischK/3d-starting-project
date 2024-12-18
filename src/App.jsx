import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;