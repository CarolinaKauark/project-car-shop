import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarService {
  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async register(data: ICar) {
    const CarODM = new CarsODM();
    const newCar = await CarODM.create(data);
    return this.createCarDomain(newCar);
  }
}