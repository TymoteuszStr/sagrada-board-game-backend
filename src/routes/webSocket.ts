import { io } from "../app";
import { Socket } from "socket.io";
import RoomService from "../services/Game/RoomService";

io.on('connection', (socket: Socket) => {
    console.log('a user connected', socket.id);
    socket.send(JSON.stringify({
    }))
    io.emit('playersInThisRoom',"test")
    
});
// const listOfUsers= RoomServices.getUsersInRoom(id)

