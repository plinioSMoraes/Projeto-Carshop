import { Router } from 'express';
import CarsControllers from '../Controllers/CarsController';

const carsRoutes = Router();
carsRoutes.post(
  '/cars',
  (req, res, next) => new CarsControllers(req, res, next).createCar(),
);

export default carsRoutes;