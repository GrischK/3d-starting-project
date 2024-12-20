import { ContactShadows, Environment } from "@react-three/drei";
import { MoveableSphere } from "./MoveableSphere";
import { Sharky } from "./Sharky.jsx";

export const Experience = () => {
  return (
    <>
      <Sharky position-y={-1.7} position-z={2} />
      <MoveableSphere position-z={-10} scale={3} />
      <MoveableSphere />
      <MoveableSphere position-x={-2} />
      <MoveableSphere position-x={2} />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.6, 0]}
        opacity={1}
        scale={40}
      />

      <Environment preset="sunset" />
    </>
  );
};