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

}

export default new RoomController()