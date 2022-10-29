import { ObjectId } from 'mongodb';
import GameRoom from '../../db/models/Game/roomModel';
import { IRoomDocument } from '../../db/models/Game/roomModel';

class RoomService {

  async addRoom(name: string, userId: string): Promise<{ statusCode: number, roomId: string | null }> {
    const _id = new ObjectId()
    try {
      await new GameRoom({ _id, name, adminId: userId, players: [userId] }).save()
    } catch (error: any) {
      console.log("Cannot add new room: ", error)
      if (error.code === 11000) return { statusCode: 400, roomId: null }
      else return { statusCode: 400, roomId: null }
    }
    return { statusCode: 200, roomId: _id.toString() }
  }

  async addPlayerToRoom(roomId: string, userId: string, adminId: string): Promise<{ statusCode: number }> {
    try {
      const room = await GameRoom.findOne({ _id: new ObjectId(roomId), adminId })
      await room?.updateOne({ $set: { players: [...room.players, userId] } }, { runValidators: true })
    } catch (error: any) {
      console.log("Cannot add user to room: ", error)
      return { statusCode: 400 }
    }
    return { statusCode: 200 }
  }

  async getAllRooms(): Promise<any> {
    try {
      const rooms = await GameRoom.find()
      console.log(rooms)
      return { rooms }
    } catch (error: any) {
      console.log("Cannot add user to room: ", error)
      return { rooms: [] }
    }
  }
}

export default new RoomService();

