import Train from "../models/train"
import Station from "../models/station"
import { Physics } from '@react-three/cannon'
import { Cube, Plattform, BorderStairs, BorderRightBuilding } from "../models/user"
import OtherUser from "../models/otherUser"

const Scene = ({setUser, clients, socketClient, collectedUser, setCollectedUser}) => {

  return (
    <>
      <Physics>
        <Train />
        <Station />
        <Cube setUser={setUser} clients={clients} socketClient={socketClient} collectedUser={collectedUser} setCollectedUser={setCollectedUser}/>
        <Plattform args={[20, 1, 60]}/>
        <BorderRightBuilding args={[19, 9, 7]}/>
        <BorderStairs args={[4, 3, 17]}/>
        {Object.keys(clients)
          .filter((clientKey) => clientKey !== socketClient.id)
          .map((client) => {
            const { position, rotation, name } = clients[client]
            return (
              <OtherUser
                key={client}
                position={position}
                rotation={rotation}
                name={name}
              />
            )
          })}
      </Physics> 
    </>
  )
}

export default Scene;