import { io } from "../app";
import { Socket } from "socket.io";
import RoomService from "../services/Game/RoomService";
import jwt, { VerifyErrors } from 'jsonwebtoken'
import { NEW_MESSAGE, PLAYERS_LIST_IN_ROOM, USER_ENTER_ROOM, USER_LEAVE_ROOM, CONNECT_ERROR, START_GAME } from "../assets/webSocketEvents";
import UserService from "../services/User/userService";
import roomController from "../controllers/roomController";


interface MySocket extends Socket{
    userId?: string
  }
io.on('connection',  (socket: MySocket) => {

  socket.on(USER_ENTER_ROOM, async (roomId:string, userId:string,setPlayerList) => {
       socket.join(roomId)
       const listOfUsersWithNames = await roomController.userEnterRoom(roomId,userId,setPlayerList)
       socket.in(roomId).emit(PLAYERS_LIST_IN_ROOM, listOfUsersWithNames)
      })

    socket.on(USER_LEAVE_ROOM, async (roomId:string, userId:string) => {    
      const listOfUsersWithNames = await roomController.userLeaveRoom(roomId,userId)
      socket.in(roomId).emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)
      // socket.emit(PLAYERS_LIST_IN_ROOM,listOfUsersWithNames)
    })

    socket.on(NEW_MESSAGE, (text:string,roomId:string) => {
        const message = {date: new Date(), text,}
        socket.to(roomId).emit(NEW_MESSAGE,message)
    })
    
    socket.on(START_GAME, () => {
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

