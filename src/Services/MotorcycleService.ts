import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import VehicleService from './VehicleSertvice';

export default class MotorcycleService extends VehicleService <IMotorcycle, Motorcycle> {
  constructor() {
    super(MotorcycleODM, 'Motorcycle not found', Motorcycle);
  }
}