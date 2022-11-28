import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();
const carController = new CarController();

CarRoutes.post(
  '/cars',
  carController.register,
);

CarRoutes.get(
  '/cars/:id',
  carController.findById,
);

CarRoutes.get(
  '/cars',
  carController.findAll,
);

CarRoutes.put(
  '/cars/:id',
  carController.updateById,
);

export default CarRoutes;