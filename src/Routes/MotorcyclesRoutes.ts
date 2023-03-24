import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/MotorcyclesController';
import isValidId from '../middlewares/validId';

const idRoute = '/motorcycles/:id';
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
  idRoute,
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new MotorcyclesControllers(req, res, next)
    .findById(req.params.id), 
);

motorcyclesRoutes.put(
  idRoute, 
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new MotorcyclesControllers(req, res, next).update(req.params.id, req.body),
);

motorcyclesRoutes.delete(
  idRoute,
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new MotorcyclesControllers(req, res, next).delete(req.params.id),
);

export default motorcyclesRoutes;