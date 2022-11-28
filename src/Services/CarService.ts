import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';
import VehicleService from './VehicleSertvice';

export default class CarService extends VehicleService<ICar, Car> {
  constructor() {
    super(CarsODM, 'Car not found', Car);
  }
}