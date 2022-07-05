import { Request, Response, Router } from 'express';
import roomService from '../services/Game/roomService';
import userService from '../services/User/userService';

class RoomController {

  async createRoom(req: Request, res: Response): Promise<void> {
    const { name } = req.body
    const { authorization } = req.headers;
    const token = authorization && (authorization as string).split(' ')[1]
    const userId = userService.getIdFromToken(token?.toString() || '')
    const { statusCode, roomId } = await roomService.addRoom(name, userId)
    res.status(statusCode).send(roomId)
  }




}

export default new RoomController()