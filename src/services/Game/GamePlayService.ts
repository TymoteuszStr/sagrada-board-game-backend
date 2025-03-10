import { isObjectIdOrHexString } from "mongoose";
import { GamePlay } from "../../logic/game/gamePlay";
import Room from "../../logic/game/room";
import { ObjectId } from "mongodb";
import { patternCards } from "../../logic/assets/patternCards";

class GamePlayServices {
  private _activeGamePlays: Map<string, GamePlay> = new Map();

  creatGamePlay(room: Room) {
    const gamePlay = new GamePlay(room);
    const objectId = new ObjectId();
    this._activeGamePlays.set(objectId.toString(), gamePlay);
    return gamePlay;
  }

  getPattenrsCard() {
    //latter add logic of sendind only 4 random card per user
    return patternCards;
  }

  get(id: string) {
    return this._activeGamePlays.get(id);
  }
}

export default new GamePlayServices();
