import express from 'express';
import GameController from '../controllers/gameController';

const router = express.Router();

router.post('/startNewGame', GameController.startNewGame)
router.post('/addNewPlayer', GameController.addNewPlayer)
router.post('/invitePlayer', GameController.invitePlayer)


module.exports = router;