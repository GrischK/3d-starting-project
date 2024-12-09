import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";

const PointLight = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const { lightColor, distance, lightIntensity, decay, lightPosition } = useControls({
    lightColor: "#ff0000", distance: 3, lightIntensity: {
      value: 1.5, min: 0, max: 20, step: 0.01,
    }, decay: 2, lightPosition: {
      x: 2, y: 1.5, z: 0,
    }
  });
  return (<>
    <pointLight ref={ref} position={[lightPosition.x, lightPosition.y, lightPosition.z]} intensity={lightIntensity}
                decay={decay} color={lightColor}
                distance={distance}
    />
  </>)
}

const Ligth = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.SpotLightHelper, "blue");

  const {
    spotLightColor,
    spotLightDistance,
    spotLightAttenuation,
    spotLightAngle,
    spotLightAnglePower,
    spotLightPosition
  } = useControls({
    spotLightColor: "#ded25e",
    spotLightDistance: 6,
    spotLightAttenuation: 2.2,
    spotLightAngle: 1,
    spotLightAnglePower: 1,
    spotLightPosition: {
      x: 0, y: 2, z: 0,
    },
  });
  return (<>
    <SpotLight
      ref={ref}
      position={[spotLightPosition.x, spotLightPosition.y, spotLightPosition.z]}
      color={spotLightColor}
      distance={spotLightDistance}
      angle={spotLightAngle}
      attenuation={spotLightAttenuation}
      anglePower={spotLightAnglePower}
    />
  </>)
}


function App() {
  const ref = useRef();

  const { position, color, transparent, opacity, lightIntensity, lightColor } = useControls({
    position: {
      x: 0.5, y: 0.5, z: 0.5,
    }, color: "#ff0000", opacity: {
      value: 1, min: 0, max: 1, step: 0.01,
    }, transparent: false,
  })


  return (<Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
    {/*<axesHelper/>*/}
    <OrbitControls />
    <PointLight />
    <Ligth />
    {/*<ambientLight intensity={lightIntensity} color={lightColor} />*/}
    {/*<directionalLight intensity={lightIntensity} color={lightColor} position={[3, 3, 3]} />*/}
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
    </mesh>
    <mesh rotation-x={-Math.PI / 2} position-y={0}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial color="white" roughness={0.2} metalness={0.8} />
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
  </Canvas>);
}

export default App;