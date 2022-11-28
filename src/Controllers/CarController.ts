import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import VehicleController from './VehicleController';

class CarController extends VehicleController <ICar, Car> {
  constructor() {
    super(new CarService());
  }
}

export default CarController;