import { Schema, model, Document } from 'mongoose';

export interface IRoom {
  name: string,
  players: string[]
}
export interface IRoomDocument extends IRoom, Document {

}

const playersSchema = new Schema({
  tags: [{
    type: String
  }]
})

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
    unique: true,
  },
  adminId: {
    type: String,
    required: true,
  },
  players: [{
    type: String
  }]



}, { versionKey: false });






const GameRoom = model<IRoomDocument>('Room', RoomSchema);
export default GameRoom

