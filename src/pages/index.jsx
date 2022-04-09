import Scene from '@/components/canvas/Scene'
import Headline from '@/components/dom/Headline'
import Navigation from '@/components/dom/navigation'
import Wallet from '@/components/dom/wallet'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import styles from './../styles/page.module.css'


// dom components goes here
const DOM = ({clients, collectedUser}) => {
  return (
    <>
      <Navigation />
      <Headline />
      {collectedUser.length !== 0 ? <Wallet collectedUser={collectedUser}/> : ""}
    </>
  )
}

const Page = () => {
  const [socketClient, setSocketClient] = useState(null);
  const [clients, setClients] = useState({});
  const [collectedUser, setCollectedUser] = useState([]);

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
        <div className={styles.container}>
          <DOM clients={clients} collectedUser={collectedUser}/>
          {/* @ts-ignore */}
        </div>
        <Scene r3f setUser={setUser} clients={clients} socketClient={socketClient} collectedUser={collectedUser} setCollectedUser={setCollectedUser}/>
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