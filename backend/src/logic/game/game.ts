import Room from "./room";
import Dice from './dice';
import { setupDices } from "../helpers/dices";

export default class Game {

  constructor(room: Room) {
    this._room = room
    this._playersNr = room.players.length
    this._dices = setupDices(this._playersNr)
  }

  private _room: Room
  private _playersNr: number
  private _dices: Dice[]






}