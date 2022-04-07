import Scene from '@/components/canvas/Scene'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'


// dom components goes here
const DOM = ({}) => {
 
  return (
    <></>
  )
}

const Page = () => {
  const [socketClient, setSocketClient] = useState(null)
  const [clients, setClients] = useState({})

  useEffect(() => {
    // On mount initialize the socket connection
    fetch('/api/socket');
    setSocketClient(io());

    // Dispose gracefuly
    return () => {
        if (socketClient) socketClient.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socketClient) {
        socketClient.on('move', (clients) => {
            setClients(clients)
        })
    }
  }, [socketClient])

  function setUser(msg){
    const { id } = socketClient;
    socketClient.emit('move', {
      id,
      rotation: msg.rotation,
      position: msg.position,
    })
  }
  if(!(clients == undefined || clients == null || socketClient == undefined || socketClient == null)){
    return (
      <>
        <DOM />
        {/* @ts-ignore */}
        <Scene r3f setUser={setUser} clients={clients} socketClient={socketClient}/>
      </>
    )
  }else{
    return (
      <>
        <div>Loading...</div>
        <div r3f ></div>
      </>
    )
  }
}
export default Page;