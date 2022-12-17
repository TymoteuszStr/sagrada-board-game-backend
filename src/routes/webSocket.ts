import { io } from "../app";
import { Socket } from "socket.io";
import RoomService from "../services/Game/RoomService";

io.on('connection', (socket: Socket) => {
    console.log('SOCKET ID', socket.id);

    socket.on('enterToRoom', (id:string) => {
        console.log('roomtId',id)
        const listOfUsers = RoomService.getUsersInRoom(id)
        socket.emit('playersInThisRoom',listOfUsers)
    })

    socket.on('sendMessage', (message:string) => {
        socket.broadcast.emit('newMessage',message)
    })
    
}); 
