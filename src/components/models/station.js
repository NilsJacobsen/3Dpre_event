import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/trainStation.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hall.geometry}
        material={nodes.Hall.material}
        position={[-15.65, 1.74, 3.09]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={2.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials["Material.002"]}
        position={[-15.67, 16.82, 3.19]}
        scale={0.93}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign.geometry}
        material={materials["Material.004"]}
        position={[-7.39, 17.01, -7.04]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={1.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gitter.geometry}
        material={materials["Material.006"]}
        position={[-15.65, 11.02, 5.18]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Düsen.geometry}
        material={nodes.Düsen.material}
        position={[6.05, -7.16, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.92, 15.03, 2.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-20.29, -2.47, -8.47]}
        scale={[1, 1, 1.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, -11.46, 18.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.008"]}
        position={[6.06, 1.82, -11.4]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[5.06, 1.13, -10.79]}
        scale={[1, 0.29, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[5.06, 0.93, -9.49]}
        scale={[1, 0.29, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[5.06, 9.51, -22.47]}
        scale={[1, 0.29, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-7.48, 13.56, -28.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[0, -1.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        scale={[10.03, 1, -29.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-7.48, 13.56, -29.36]}
        scale={[0.96, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/trainStation.gltf");
