import express from 'express';
import carsRoutes from './Routes/CarsRoutes';
import motorcyclesRoutes from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use('/', carsRoutes);
app.use('/', motorcyclesRoutes);

export default app;
