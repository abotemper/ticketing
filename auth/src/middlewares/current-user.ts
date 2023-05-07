import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

//对已经存在的type 进行修改（增加property），因为这个interface本来没这个键
//告诉interface Request，可有可没有currentUser这个键
//如果有那么它是UserPayload 类型
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {

  if (!req.session?.jwt){
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  }catch(err){

   
  }
  next();
};