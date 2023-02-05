import { Request, Response } from 'express';
import roomService from '../services/Game/RoomService';
import userService from '../services/User/userService';

class RoomController {

  async createRoom(req: Request, res: Response): Promise<void> {
    const { name } = req.body
    const { authorization } = req.headers;
    const userId = userService.getIdFromAuthorizationHeader(authorization)
    const { statusCode, roomId } = await roomService.addRoom(name, userId)
    res.status(statusCode).send(roomId)
  }

  async getRooms(_: Request, res: Response): Promise<void> {
    const rooms = await roomService.getAllRooms()
    res.status(200).send(rooms)
  }

  async userEnterRoom(roomId:string,userId:string,setPlayerList:any):Promise<any[]>{
    await roomService.addPlayerToRoom(roomId,userId)
    const listOfUsers = await roomService.getUsersInRoom(roomId)
    const listOfUsersWithNames: ({ id: any; name: string; } | null)[] = []
    for await(const id of listOfUsers) listOfUsersWithNames.push(await userService.getUserFromId(id));
    if (typeof setPlayerList === 'function') setPlayerList(listOfUsersWithNames)

    return listOfUsersWithNames
  }
  
  async userLeaveRoom(roomId:string, userId:string):Promise<any[]>{
    await roomService.removePlayerFromRoom(roomId,userId)
    const listOfUsers = await roomService.getUsersInRoom(roomId)
    const listOfUsersWithNames = []
   for await(const id of listOfUsers) listOfUsersWithNames.push(await userService.getUserFromId(id));
   
   return listOfUsersWithNames
  }

}

export default new RoomController()