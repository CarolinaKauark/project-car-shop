import { RequestHandler } from 'express';
import VehicleService from '../Services/VehicleSertvice';

export default abstract class VehicleController<I, D> {
  private service: VehicleService<I, D>;
      
  constructor(service: VehicleService<I, D>) {
    this.service = service;
  }

  public register: RequestHandler = async (req, res, next) => {
    const vehicle: I = req.body;

    try {
      const newVehicle = await this.service.register(vehicle);
      return res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  };

  public findAll: RequestHandler = async (_req, res, next) => {
    try {
      const newVehicle = await this.service.findAll();
      return res.status(200).json(newVehicle);
    } catch (error) {
      next(error);
    }
  };

  public findById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
      const newVehicle = await this.service.findById(id);
      return res.status(200).json(newVehicle);
    } catch (error) {
      next(error);
    }
  };

  public updateById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedCar = await this.service.updateById(id, body);
      return res.status(200).json(updatedCar);
    } catch (error) {
      next(error);
    }
  };
}