import { Request, Response, Router } from "express";
import { GamePlay } from "../logic/game/gamePlay";
import RoomService from "../services/Game/RoomService";
import GamePlayService from "../services/Game/GamePlayService";

class GameController {
  async startNewGame(req: Request, res: Response): Promise<void> {
    const { roomId } = req.body;
    const room = await RoomService.getRoom(roomId);
    if (room === null) res.sendStatus(500);
    else {
      const gamePlay = GamePlayService.creatGamePlay(room);
      res.send({
        playerOrder: gamePlay.getPlayersOrder(),
        setup: gamePlay.getCardSetup(),
      });
    }
  }

  addNewPlayer() {}

  invitePlayer() {}
}

export default new GameController();
