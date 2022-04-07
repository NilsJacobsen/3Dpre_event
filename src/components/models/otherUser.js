import { useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'

export function OtherUser({position}) {
  const [ref, api] = useBox(() => ({ 
    mass: 5, 
    type: "Kinematic", 
    position: [0,1.5,0], 
    }
  ))

  useFrame((_, delta) => {
    api.position.set(position[0],position[1],position[2]);
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial color="red" />
    </mesh>
  )
}