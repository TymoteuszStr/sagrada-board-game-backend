import Room from './game/room';
import Game from './game/game';
import Player from './game/player';
import { pullDices } from './helpers/dices';
import Dice from './game/dice';
import { setPlayersOrder } from './helpers/playersOrder';

class GamePlay {
  constructor(room: Room) {
    this._room = room;
    this._playersNr = room.players.length
  }
  private _room: Room
  private _game: Game | undefined
  private _playersNr: number
  private _currentPlayer: Player | undefined
  private _dicesInRound: Dice[] | undefined
  private _playersOrder: string[] | undefined

  startGame() {
    this._game = new Game(this._playersNr)
    this._currentPlayer = this._room.players[0]
    this._playersOrder = setPlayersOrder(this._room.players)
  }

  pullAndRollDices() {
    if (this._game === undefined) return

    this._dicesInRound = pullDices(this._game.dices, this._playersNr)
    this._dicesInRound.forEach((dice) => dice.throw())

  }









}