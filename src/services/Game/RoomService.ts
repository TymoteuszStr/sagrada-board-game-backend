import { ObjectId } from 'mongodb';
import GameRoom, { IRoom, IRoomDocument } from '../../db/models/Game/roomModel';
import { IUserDocument } from '../../db/models/User/userModel';

class RoomService {

  async addRoom(name: string, userId: string): Promise<{ statusCode: number, roomId: string | null }> {
    const _id = new ObjectId()
    try {
      await new GameRoom({ _id, name, adminId: userId, players: [] }).save()
    } catch (error: any) {
      console.log("Cannot add new room: ", error)
      if (error.code === 11000) return { statusCode: 400, roomId: null }
      else return { statusCode: 400, roomId: null }
    }
    return { statusCode: 200, roomId: _id.toString() }
  }

  async getAllRooms(): Promise<IRoomDocument[]>{
    try {
      const rooms = await GameRoom.find()
      return rooms
    } catch (error:any) {
      return []
    }
  }
  
  async getUsersInRoom(roomId: string): Promise<string[]> {
    try {
      const room = await GameRoom.findOne({ _id: new ObjectId(roomId) }) 
      return room?.players || []
    } catch (error: any) {
      console.log("Cannot add user to room: ", error)
      return []
    }
  }

  async addPlayerToRoom(roomId: string, userId: string): Promise<boolean> {
    try {
      const room = await GameRoom.findOne({ _id: new ObjectId(roomId) })
      if(room?.players.includes(userId)) return true
      await room?.updateOne({ $set: { players: [...room.players, userId] } }, { runValidators: true })
      return true
    } catch (error: any) {
      console.log("Cannot add user to room: ", error)
      return false
    }
  }
  async removePlayerFromRoom(roomId: string, userId: string): Promise<boolean> {
    try {
      const room = await GameRoom.findOne({ _id: new ObjectId(roomId) })
     const players= room?.players.filter((item)=> item !== userId)
     console.log(players)
      await room?.updateOne({ $set: { players} })
      return true
    } catch (error: any) {
      console.log("Cannot add user to room: ", error)
      return false
    }
  }

}

export default new RoomService();

