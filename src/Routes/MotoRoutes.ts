import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotoRoutes = Router();

MotoRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).register(),
);

MotoRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

MotoRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

MotoRoutes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default MotoRoutes;