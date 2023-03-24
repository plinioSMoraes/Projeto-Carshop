import { Router } from 'express';
import CarsControllers from '../Controllers/CarsController';
import isValidId from '../middlewares/validId';

const idRoute = '/cars/:id';
const carsRoutes = Router();
carsRoutes.post(
  '/cars',
  (req, res, next) => new CarsControllers(req, res, next).createCar(),
);
carsRoutes.get(
  idRoute, 
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new CarsControllers(req, res, next)
    .findById(req.params.id),
);
carsRoutes.get('/cars', (req, res, next) => new CarsControllers(req, res, next).findAll());
carsRoutes.put(
  idRoute, 
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new CarsControllers(req, res, next).update(req.params.id, req.body),
);

carsRoutes.delete(
  idRoute,
  (req, res, next) => isValidId(req, res, next),
  (req, res, next) => new CarsControllers(req, res, next).delete(req.params.id),
);
export default carsRoutes;