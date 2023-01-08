import { io } from "../app";
import { Socket } from "socket.io";
import RoomService from "../services/Game/RoomService";
import jwt, { VerifyErrors } from 'jsonwebtoken'
import { NEW_MESSAGE, PLAYERS_LIST_IN_ROOM, USER_ENTER_ROOM, USER_LEAVE_ROOM, CONNECT_ERROR } from "../assets/webSocketEvents";
import UserService from "../services/User/userService";


interface MySocket extends Socket{
    userId?: string
  }
io.on('connection',  (socket: MySocket) => {
  /// USER ENTER THE ROOM
  socket.on(USER_ENTER_ROOM, async (roomId:string, userId:string,setPlayerList) => {
       socket.join(roomId)
       await RoomService.addPlayerToRoom(roomId,userId)
       const listOfUsers = await RoomService.getUsersInRoom(roomId)
       console.log(listOfUsers);
       const listOfUsersWithNames: ({ id: any; name: string; } | null)[] = []
       for await(const id of listOfUsers) listOfUsersWithNames.push(await UserService.getUserFromId(id));
       if (typeof setPlayerList === 'function') setPlayerList(listOfUsersWithNames)

      socket.in(roomId).emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)
    })
    
    /// USER LEAVE THE ROOM
    socket.on(USER_LEAVE_ROOM, async (roomId:string, userId:string) => {
      await RoomService.removePlayerFromRoom(roomId,userId)
       const listOfUsers = await RoomService.getUsersInRoom(roomId)
       const listOfUsersWithNames = []
      for await(const id of listOfUsers) listOfUsersWithNames.push(await UserService.getUserFromId(id));
      // socket.broadcast.to(roomId).emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)
      socket.in(roomId).emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)

      // socket.emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)

    })
  

    socket.on(NEW_MESSAGE, (text:string,roomId:string) => {
        const message = {date: new Date(), text,}
        socket.broadcast.to(roomId).emit(NEW_MESSAGE,message)
    })
    
    socket.on(CONNECT_ERROR, error =>{
        socket.emit(CONNECT_ERROR)
    })
}); 

io.use((socket: MySocket, next)=>{
    const token =socket.handshake?.auth?.token;
    if(token){
        try{
           jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET as string, (error: VerifyErrors | null, userId: any) => {
              if (!userId) {
                console.log('Invalid token: ', error)
                next(new Error('User is not authenticated'))
              }
              socket.userId=userId._id
              next()
              
            })
          }catch(err){
            next(new Error('User is not authenticated'))
          }
        next()
    }else
    {
        next(new Error('User is not authenticated'))
    }
})

