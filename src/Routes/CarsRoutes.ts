import { Router } from 'express';
import CarsControllers from '../Controllers/CarsController';
import isValidId from '../middlewares/validId';

const carsRoutes = Router();
carsRoutes.post(
  '/cars',
  (req, res, next) => new CarsControllers(req, res, next).createCar(),
);
carsRoutes.get(
  '/cars/:id', 
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new CarsControllers(req, res, next)
    .findById(req.params.id),
);
carsRoutes.get('/cars', (req, res, next) => new CarsControllers(req, res, next).findAll());
carsRoutes.put(
  '/cars/:id', 
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new CarsControllers(req, res, next).update(req.params.id, req.body),
);

export default carsRoutes;