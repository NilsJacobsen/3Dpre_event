import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      orthographic 
      camera={{ zoom: 13, position: [200, 200, 200] }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      {/* <LControl /> */}
      <Preload all />
      {children}
      <directionalLight
        intensity={0.8}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        position={[-200, 200, 200]}s
      />
      <ambientLight intensity={0.1} />
    </Canvas>
  )
}

export default LCanvas
