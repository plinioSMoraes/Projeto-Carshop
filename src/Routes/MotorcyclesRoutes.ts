import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/MotorcyclesController';
import isValidId from '../middlewares/validId';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesControllers(req, res, next).createMotorcycle(),
);

motorcyclesRoutes.get(
  '/motorcycles', 
  (req, res, next) => new MotorcyclesControllers(req, res, next).findAll(),
);

motorcyclesRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new MotorcyclesControllers(req, res, next)
    .findById(req.params.id), 
);

export default motorcyclesRoutes;