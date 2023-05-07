import { CustomError } from "./custom-errors";

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor(){
    super('Not Authorized');
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined; }[] {
    return [ { message: 'Not Authorized'} ]
      
  }
}