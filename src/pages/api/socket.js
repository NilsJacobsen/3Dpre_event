import { isOptional } from 'next-compose-plugins/lib/optional';
import { Server } from 'socket.io'
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
const customConfig = {
  dictionaries: [adjectives, colors],
  separator: '-',
  length: 1,
};

let clients = {};

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      console.log(
        `User ${socket.id} connected, there are currently ${io.engine.clientsCount} users connected`
      );
      clients[socket.id] = {
        name: uniqueNamesGenerator({
          dictionaries: [adjectives, animals]
        }),
        position: [0,0,0],
        rotation: [0,0,0]
      }
      io.sockets.emit('move', clients);

      socket.on('move',({ id, rotation, position }) => {
        clients[id].position = position
        clients[id].rotation = rotation

        io.sockets.emit('move', clients)
      })

      socket.on('disconnect', () => {
        console.log(
            `User ${socket.id} disconnected, there are currently ${io.engine.clientsCount} users connected`
        )

        //Delete this client from the object
        delete clients[socket.id]

        io.sockets.emit('move', clients)
      })
    })
  }
  res.end()
}

export default SocketHandler