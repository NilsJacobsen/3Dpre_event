import { usePlane, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo } from 'react'

export default function OtherUser({position, rotation, name}) {
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
    <mesh ref={ref} name={name}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial color="#ffffff" />
      <Text scale={[8, 4, 4]} opacity={0.5} position={[0, 0, 0]}>
        {name}
      </Text>
    </mesh>
  )
}

function Text({ children, position, scale, color = 'white', fontSize = 30 }) {
  const canvas = useMemo(() => {
    let fontface = 'Arial'
    let fontsize = fontSize
    let borderThickness = 4

    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    context.textBaseline = 'middle'
    context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`

    let metrics = context.measureText(children)
    let textWidth = metrics.width

    context.lineWidth = borderThickness

    context.fillStyle = color
    context.fillText(children, textWidth - textWidth * 0.8, fontsize)
    return canvas
  }, [children])

  return (
    <sprite scale={scale} position={position}>
      <spriteMaterial sizeAttenuation={false} attach="material" transparent alphaTest={0.5}>
        <canvasTexture attach="map" image={canvas} />
      </spriteMaterial>
    </sprite>
  )
}