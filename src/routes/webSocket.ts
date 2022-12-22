import { io } from "../app";
import { Socket } from "socket.io";
import RoomService from "../services/Game/RoomService";
import { NEW_MESSAGE, PLAYERS_LIST_IN_ROOM, USER_ENTER_ROOM, USER_LEAVE_ROOM } from "../assets/webSocketEvents";

io.on('connection', (socket: Socket) => {
    console.log('SOCKET ID', socket.id);

    socket.on(USER_ENTER_ROOM, (roomId:string, userId) => {
        socket.join(roomId)
        // RoomService.addPlayerToRoom(roomId,userId)
        // const listOfUsers = RoomService.getUsersInRoom(roomId)
        // console.log(listOfUsers)
        // socket.emit(PLAYERS_LIST_IN_ROOM,listOfUsers)
    })
    socket.on(USER_LEAVE_ROOM, (roomId:string, userId) => {
        socket.join(roomId)
        // RoomService.removePlayerFromRoom(roomId,userId)
        // const listOfUsers = RoomService.getUsersInRoom(roomId)
        // console.log(listOfUsers)
        // socket.emit(PLAYERS_LIST_IN_ROOM,listOfUsers)
    })

    socket.on(NEW_MESSAGE, (text:string,roomId:string) => {
        console.log(roomId);
        const message = {date: new Date(), text,}
        socket.broadcast.to(roomId).emit(NEW_MESSAGE,message)
    })
    
}); 
