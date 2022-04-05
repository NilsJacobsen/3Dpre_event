import dynamic from 'next/dynamic'
import Train from '@/components/models/train'
import Scene from '@/components/canvas/Scene'
// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket;

// dom components goes here
const DOM = () => {
  const [input, setInput] = useState('')

  useEffect(() => socketInitializer(), [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }
  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  )
}

// // canvas components goes here
// const R3F = () => {
//   return (
//     <>
//       <Scene />
//       {/* <Shader /> */}
//     </>
//   )
// }

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <Scene r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
