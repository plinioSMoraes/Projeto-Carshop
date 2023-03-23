import { NextFunction, Request, Response } from 'express';

const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id.length !== 24) return res.status(422).json({ message: 'Invalid mongo id' });
  next();
};

export default isValidId;