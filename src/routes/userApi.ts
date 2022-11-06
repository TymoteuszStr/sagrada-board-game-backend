import express from 'express';
import UserController from '../controllers/userController'

const router = express.Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/getUserFromToken', UserController.getUserFromToken)

module.exports = router;