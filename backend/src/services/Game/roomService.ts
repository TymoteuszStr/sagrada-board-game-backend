import { ObjectId } from 'mongodb';
import GameRoom, { IRoom } from '../../db/models/Game/roomModel';

class RoomService {

  async addRoom(name: string, userId: string): Promise<{ statusCode: number, roomId: string | null }> {
    const _id = new ObjectId()
    try {
      await new GameRoom({ _id, name, adminId: userId }).save()
    } catch (error: any) {
      console.log("Cannot add new room: ", error)
      if (error.code === 11000) return { statusCode: 400, roomId: null }
      else return { statusCode: 400, roomId: null }
    }
    return { statusCode: 200, roomId: _id.toString() }
  }


}

export default new RoomService();

