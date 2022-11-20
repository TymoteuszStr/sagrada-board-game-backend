import jwt, { VerifyErrors } from 'jsonwebtoken'
import { Response, NextFunction } from 'express';

module.exports = function (req: any, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization && (authorization as string).split(' ')[1]
  if (!token) return res.sendStatus(401)
  try{
    jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET as string, (error: VerifyErrors | null, userId: any) => {
      if (!userId) {
        console.log('Invalid token: ', error)
        return res.sendStatus(403)
      }
      req.USER_ID = userId?._id ?? null
      next()
    })
  }catch(err){
    return null
  }
}

