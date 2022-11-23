import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).register(),
);

CarRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

CarRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

CarRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

export default CarRoutes;