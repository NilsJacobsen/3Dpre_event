import Train from "../models/train"
import Station from "../models/station"
import { Physics } from '@react-three/cannon'
import { Cube, Plattform, BorderStairs, BorderRightBuilding } from "../models/user"
import {MeshNormalMaterial, BoxBufferGeometry } from 'three'
import OtherUser from "../models/otherUser"

const Scene = ({setUser, clients, socketClient}) => {

  return (
    <>
      <Physics>
        <Train />
        <Station />
        <Cube setUser={setUser}/>
        <Plattform args={[20, 1, 60]}/>
        <BorderRightBuilding args={[19, 9, 7]}/>
        <BorderStairs args={[4, 3, 17]}/>
        {Object.keys(clients)
          .filter((clientKey) => clientKey !== socketClient.id)
          .map((client) => {
              const { position, rotation } = clients[client]
              return (
                  <OtherUser
                      key={client}
                      position={position}
                      rotation={rotation}
                  />
              )
          })}
      </Physics> 
    </>
  )
}

export default Scene;