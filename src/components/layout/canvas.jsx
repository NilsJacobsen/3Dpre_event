import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

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
        top: 130,
      }}
      orthographic 
      shadows
      camera={{ zoom: 13, position: [200, 200, 200] }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      {/* <LControl /> */}
      <Preload all />
      {children}
      <LightWarm />
      <LightCold />
      <ambientLight intensity={0.1} />
    </Canvas>
  )
}

export default LCanvas


const LightWarm = () => {
  //Create a PointLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0xfdc12b, 1, 100)
  light.position.set(-100, 100, 100)
  light.castShadow = true // default false
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512 // default
  light.shadow.mapSize.height = 512 // default
  light.shadow.camera.near = 0.1 // default
  light.shadow.camera.far = 300 // default
  light.shadow.camera.top = -100 // default
  light.shadow.camera.right = 100 // default
  light.shadow.camera.left = -100 // default
  light.shadow.camera.bottom = 100 // default
  return <primitive object={light} />
}
const LightCold = () => {
  //Create a PointLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0x5df5fd, 1, 100)
  light.position.set(50, 100, -100)
  light.castShadow = true // default false
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512 // default
  light.shadow.mapSize.height = 512 // default
  light.shadow.camera.near = 0.1 // default
  light.shadow.camera.far = 300 // default
  light.shadow.camera.top = -100 // default
  light.shadow.camera.right = 100 // default
  light.shadow.camera.left = -100 // default
  light.shadow.camera.bottom = 100 // default
  return <primitive object={light} />
}