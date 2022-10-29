import express from 'express';
import RoomController from '../controllers/roomController';

const router = express.Router();

router.post('/createRoom', RoomController.createRoom)
router.post('/addPlayerToRoom', RoomController.addPlayerToRoom)


module.exports = router;