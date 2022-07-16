import Room from "./room";
import Dice from './dice';
import { setupDices } from "../helpers/dices";
import { ROUND_MAX_NR } from "../assets/constants";
import PublicTargetCard from './publicTargetCard';
import { drawPublicTargetCards } from '../helpers/drawPublicTargetCards';

export default class Game {

  constructor(room: Room) {
    this._room = room
    this._playersNr = room.players.length
    this._dices = setupDices(this._playersNr)
    this._toolsCards = [] // drawToolCards()
    this._publicTargetCards = drawPublicTargetCards()
  }

  private _playersNr: number
  private _room: Room
  private _dices: Dice[]
  private _toolsCards: any //zmienić typ po dodaniu klasy toolCard
  private _publicTargetCards: PublicTargetCard[]
  private _currentRoundNr = 0






}