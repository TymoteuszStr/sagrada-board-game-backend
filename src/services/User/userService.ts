import User, { IUserDocument } from '../../db/models/User/userModel';
import { IUser } from '../../db/models/User/userModel';
import { ObjectId } from 'mongodb';
import jwt, { VerifyErrors } from 'jsonwebtoken'

class UserService {

  async checkUserAndGenerateToken(login: string, password: string): Promise<{ token: string, userId: string, name: string }> {
    const user: IUserDocument | null = await User.findOne({ name: login })

    if (user && user.checkPassword(password))
      return { token: jwt.sign({ _id: user._id.toString() }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '8h' }), userId: user._id.toString(), name: user.name.toString() }
    else return { token: '', userId: '', name: '' }
  }

  async addUser(user: IUser): Promise<number> {
    try {
      const _id = new ObjectId()
      await new User({ _id, ...user }).save()
    } catch (error: any) {
      console.log("Cannot add new user: ", error)
      if (error.code === 11000) return 409
      return 400;
    }
    return 200
  }

  getIdFromAuthorizationHeader(authorization:string | undefined):string{
    const token = authorization && (authorization as string).split(' ')[1]
    return this.getUserIdFromToken(token?.toString() || '')
  }

  getUserIdFromToken(token: string): string{
    let id = '';
    try{
      jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET as string, (error: VerifyErrors | null, userId: any) => {
        id = userId._id.toString()
      })
      return id
    }catch(err){
      return ''
    }
  }
  async getUserFromId(id: string): Promise<{ id: any; name: string; } | null> {
    const _id = new ObjectId(id)
    const user = await User.findOne({ _id })
    return user ? { id: user._id, name: user.name } : null
  }


}

export default new UserService();

