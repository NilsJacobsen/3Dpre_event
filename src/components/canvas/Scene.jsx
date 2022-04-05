import Train from "../models/train"
import Shader from "./Shader/Shader"
import Station from "../models/station"

const Scene = (props) => {

  return (
    <>
      <Train />
      <Station />
      <Shader />
    </>
  )
}

export default Scene