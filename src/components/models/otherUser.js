import { usePlane, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function OtherUser({position, rotation}) {
  const [ref, api] = useBox(() => ({ 
    mass: 5, 
    type: "Static", 
    mass: 500,
    position: [0, 1.5, 0], 
    }
  ))

  useFrame((_, delta) => {
    api.position.set(position[0],position[1],position[2]);
    api.rotation.set(rotation[0],rotation[1],rotation[2]);
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial color="#ffffff" />
    </mesh>
  )
}