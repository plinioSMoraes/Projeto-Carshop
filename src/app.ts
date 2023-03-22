import express from 'express';
import carsRoutes from './Routes/CarsRoutes';

const app = express();
app.use(express.json());
app.use('/', carsRoutes);

export default app;
