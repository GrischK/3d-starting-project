import { useState } from "react";

export const MoveableSphere = (props) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  let color = hover ? "pink" : "white";
  if (selected) {
    color = "hotpink"
  }

  return (
    <mesh {...props}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onClick={() => setSelected(!selected)}
          onPointerMiss={() => setSelected(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
