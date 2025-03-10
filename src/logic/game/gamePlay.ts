import Room from "./room";
import Player from "./player";
import Dice from "./dice";
import { setPlayersOrder } from "../helpers/playersOrder";
import { BoardSetup } from "./boardSetup";
import { roundNumberGenerator } from "../helpers/roundNumberGenerator";

export class GamePlay {
  constructor(room: Room) {
    this._room = room;
    this.roundNumberGenerator = roundNumberGenerator();
    this._boardSetup = new BoardSetup(this._room.players.length);
    this._currentPlayer = this._room.players[0];
    this._playersOrder = setPlayersOrder(this._room.players);
  }
  private _room: Room;
  private _boardSetup: BoardSetup;
  private _currentPlayer: Player;
  private _dicesInRound: Dice[] = [];
  private roundNumberGenerator: Generator<number>;
  private _playersOrder: string[];
  public currentRoundNumber: IteratorResult<number, any> | undefined;

  pullAndRollDices() {
    if (this._boardSetup === undefined) return;

    this._dicesInRound = this._boardSetup.pullDices();
    this._dicesInRound.forEach((dice) => dice.throw());
  }

  increaseRoundNumber(): void {
    this.currentRoundNumber = this.roundNumberGenerator.next();
  }

  get playersOrder() {
    return this._playersOrder;
  }
  get cardSetup() {
    return this._boardSetup.getCardSetup();
  }
}
