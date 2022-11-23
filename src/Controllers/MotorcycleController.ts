import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async register() {
    const moto: IMotorcycle = this.req.body;

    try {
      const newMoto = await this.service.register(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const newMoto = await this.service.findAll();
      return this.res.status(200).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const newMoto = await this.service.findById(id);
      return this.res.status(200).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const updatedMoto = await this.service.updateById(id, body);
      return this.res.status(200).json(updatedMoto);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;