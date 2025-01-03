import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  space: "space"
}

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.space, keys: ["Space"] },
    ],
    []
  );

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
          <OrbitControls maxPolarAngle={Math.PI / 2} />
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;