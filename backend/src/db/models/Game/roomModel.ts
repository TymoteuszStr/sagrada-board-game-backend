import { Schema, model, Document } from 'mongoose';
import { StringifyOptions } from 'querystring';
import { MAX_PLAYERS_NR } from '../../../logic/assets/constants';

export interface IRoom {
  name: string,
  adminId: string,
  players: string[]
}
export interface IRoomDocument extends IRoom, Document {
  _id: string
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
      type: String,
    }],
    validate: [playersArrayLimit, '{PATH} exceeds the limit of 4'],
    required: false
  }

}, { versionKey: false });

function playersArrayLimit(val: number[]) {
  return val.length <= MAX_PLAYERS_NR;
}





const GameRoom = model<IRoomDocument>('Room', RoomSchema);
export default GameRoom

