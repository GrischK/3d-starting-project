import { useRef, useState } from "react";
import { useCursor, useKeyboardControls } from "@react-three/drei";
import { Controls } from "../App";
import { useFrame } from "@react-three/fiber";

const MOVEMENT_SPEED = 0.05

export const MoveableSphere = (props) => {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  useCursor(hover)

  let color = hover ? "pink" : "white";
  if (selected) {
    color = "hotpink"
  }

  const forwardPressed = useKeyboardControls((state) => state[Controls.forward])
  const backPressed = useKeyboardControls((state) => state[Controls.back])
  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])

  useFrame(() => {
    if (!selected) {
      return;
    }
    if (forwardPressed) {
      ref.current.position.y += MOVEMENT_SPEED;
    }
    if (backPressed) {
      ref.current.position.y -= MOVEMENT_SPEED;
    }
    if (rightPressed) {
      ref.current.position.x += MOVEMENT_SPEED;
    }
    if (leftPressed) {
      ref.current.position.x -= MOVEMENT_SPEED;
    }
  })

  return (
    <mesh {...props}
          ref={ref}
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
