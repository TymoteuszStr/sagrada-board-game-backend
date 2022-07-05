import { Schema, model, Document } from 'mongoose';

export interface IRoom {
  name: string,
  adminId: string,
  players: string[]
}
export interface IRoomDocument extends IRoom, Document {

}

// const playersSchema = new Schema({
//   type: [{
//     type: String
//   }]
// })

const RoomSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Pole name is required'],
    minLength: 2,
    maxLength: 60,
    trim: true,
    unique: false,
  },
  adminId: {
    type: String,
    required: true,
  },
  players: {
    type: [{
      type: String
    }],
    required: false
  }

}, { versionKey: false });






const GameRoom = model<IRoomDocument>('Room', RoomSchema);
export default GameRoom

