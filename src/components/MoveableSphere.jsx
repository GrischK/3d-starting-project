import { useState } from "react";
import { useCursor } from "@react-three/drei";

export const MoveableSphere = (props) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  useCursor(hover)

  let color = hover ? "pink" : "white";
  if (selected) {
    color = "hotpink"
  }

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
