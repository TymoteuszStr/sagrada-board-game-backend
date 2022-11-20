import { Request, Response, Router } from 'express';
import UserService from '../services/User/userService'

class UserController {

  async login(req: Request, res: Response): Promise<void> {
    const { login, password } = req.body;
    const { token, userId, name } = await UserService.checkUserAndGenerateToken(login, password)
    if (!token) res.sendStatus(401)
    else res.send({ token, userId, name }).status(200)
  }

  async register(req: Request, res: Response): Promise<void> {
    const { login, password } = req.body;
    const statusCode = await UserService.addUser({ name: login, password })
    res.sendStatus(statusCode)
  }
  async getUserFromToken(req: Request, res: Response): Promise<void> {
    const { token } = req.body;
    const id = UserService.getUserIdFromToken(token)
    if (!id) {
      res.send(null)
      return
    }
    const user = await UserService.getUserFromId(id)
    res.send(user)
  }

}

export default new UserController()