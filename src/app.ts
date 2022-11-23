import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/CarRoutes';
import MotoRoutes from './Routes/MotoRoutes';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(MotoRoutes);

app.use(ErrorHandler.handle);

export default app;
