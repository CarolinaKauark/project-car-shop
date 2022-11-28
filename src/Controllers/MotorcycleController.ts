import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import VehicleController from './VehicleController';

class MotorcycleController extends VehicleController <IMotorcycle, Motorcycle> {
  constructor() {
    super(new MotorcycleService());
  }
}

export default MotorcycleController;