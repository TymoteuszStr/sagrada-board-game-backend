import { Request, Response, Router } from 'express';
import roomService from '../services/Game/RoomService';
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

  async addPlayerToRoom(req: Request, res: Response): Promise<void> {
    const { roomId, playerId } = req.body
    const { authorization } = req.headers;
    const token = authorization && (authorization as string).split(' ')[1]
    const adminId = userService.getIdFromToken(token?.toString() || '')
    const { statusCode } = await roomService.addPlayerToRoom(roomId, playerId, adminId)
    res.sendStatus(statusCode)
  }




}

export default new RoomController()