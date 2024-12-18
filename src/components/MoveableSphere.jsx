import { useState } from "react";
import { useCursor, useKeyboardControls } from "@react-three/drei";
import { Controls } from "../App";

const MOVEMENT_SPEED = 0.05

export const MoveableSphere = (props) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  useCursor(hover)

  let color = hover ? "pink" : "white";
  if (selected) {
    color = "hotpink"
  }

  const forwardPressed = useKeyboardControls((state)=> state[Controls.forward])

  return (
    <mesh {...props}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHover(true)
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHover(false)
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSelected(!selected)
          }}
          onPointerMissed={(e) => {
            e.stopPropagation();
            setSelected(false)
          }}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
