import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Train({play}) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/train.gltf");

  const startTrainPos = -2000;
  const endTrainPos = 2000;
  let trainPos = startTrainPos;

  useFrame((_, delta) => {
    trainPos = trainPos + 3;
    if(trainPos > -400 && trainPos < -396){
      play();
      console.log("train");
    }

    if(trainPos >= endTrainPos){
      trainPos = startTrainPos;
    }
    group.current.position.z = trainPos;
  })

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-13.44, 5.64, 47.02]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.010"]}
        position={[-13.44, -0.28, 43.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-13.44, -0.24, 43.6]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-13.44, -0.24, 54.25]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-11.21, 1.13, 35.97]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-11.21, 1.13, 25.01]}
        rotation={[1.57, -0.35, 0]}
        scale={[1.95, 2.67, 2.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-15.64, 1.13, 35.97]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-15.64, 1.13, 25.01]}
        rotation={[1.57, -0.35, 0]}
        scale={[1.95, 2.67, 2.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-13.53, 1.07, 43.32]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.49, 3.49, 2.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
        position={[-13.44, -0.28, 31.78]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={nodes.Circle003.material}
        position={[-13.44, -0.28, 31.78]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[-13.44, -0.28, 42.28]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-13.44, -0.28, 19.32]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-13.44, -0.24, 43.6]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[-13.44, -0.24, 54.25]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-11.21, 1.13, 35.97]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[-11.21, 1.13, 25.01]}
        rotation={[1.57, -0.35, 0]}
        scale={[1.95, 2.67, 2.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={nodes.Circle004.material}
        position={[-13.44, -0.28, 43.34]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={nodes.Circle005.material}
        position={[-13.44, -0.28, 31.78]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={nodes.Circle006.material}
        position={[-13.44, -0.28, 31.78]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[-13.44, -0.24, 15.45]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[-11.21, 1.13, 9.12]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={nodes.Circle009.material}
        position={[-13.43, -0.28, 3.62]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={nodes.Circle010.material}
        position={[-13.43, -0.28, 3.62]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[-13.44, -0.24, 28.72]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={nodes.Circle007.material}
        position={[-13.44, -0.28, 16.9]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={nodes.Circle008.material}
        position={[-13.44, -0.28, 16.9]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[-13.53, 1.07, 17.59]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.49, 3.49, 2.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[-13.44, -0.28, 17.79]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[-13.44, -0.28, 26.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[-13.44, -0.28, 12.1]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={nodes.Cube026.material}
        position={[-13.44, -0.28, 16.73]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[-13.43, -0.28, -6.23]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[-13.43, -0.24, -10.1]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-11.21, 1.13, -16.42]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={nodes.Circle011.material}
        position={[-13.43, -0.28, -21.92]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={nodes.Circle012.material}
        position={[-13.43, -0.28, -21.92]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[-13.43, -0.24, 3.18]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={nodes.Circle013.material}
        position={[-13.43, -0.28, -8.65]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={nodes.Circle014.material}
        position={[-13.43, -0.28, -8.65]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={nodes.Cube030.material}
        position={[-13.53, 1.07, -7.96]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.49, 3.49, 2.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[-13.43, -0.28, -7.76]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[-13.43, -0.28, 0.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[-13.43, -0.28, -13.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[-13.43, -0.28, -8.68]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[-13.43, -0.28, -31.64]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={nodes.Cube036.material}
        position={[-13.43, -0.24, -35.51]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[-11.2, 1.13, -41.83]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[2.35, 2.67, 1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={nodes.Circle015.material}
        position={[-13.43, -0.28, -47.33]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={nodes.Circle016.material}
        position={[-13.43, -0.28, -47.33]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[-13.43, -0.24, -22.23]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={nodes.Circle017.material}
        position={[-13.43, -0.28, -34.06]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={nodes.Circle018.material}
        position={[-13.43, -0.28, -34.06]}
        rotation={[-1.57, 0.61, 3.14]}
        scale={[3.92, 4.49, 4.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[-13.53, 1.07, -33.36]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.49, 3.49, 2.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[-13.43, -0.28, -33.17]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[-13.43, -0.28, -24.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={nodes.Cube041.material}
        position={[-13.43, -0.28, -38.85]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.68, 3.68, 2.96]}
      />
    </group>
  );
}

useGLTF.preload("/train.gltf");