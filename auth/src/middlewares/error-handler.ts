import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-errors";

export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  nest: NextFunction
  ) => {
     if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ errors: err.serializeErrors() });
     }

    res.status(400).send({
      errors: [{ message: 'Something wnt wrong'}]
    });
  };