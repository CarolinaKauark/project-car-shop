import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotoRoutes = Router();
const motorcycleController = new MotorcycleController();

MotoRoutes.post(
  '/motorcycles',
  motorcycleController.register,
);

MotoRoutes.get(
  '/motorcycles/:id',
  motorcycleController.findById,
);

MotoRoutes.get(
  '/motorcycles',
  motorcycleController.findAll,
);

MotoRoutes.put(
  '/motorcycles/:id',
  motorcycleController.updateById,
);

export default MotoRoutes;