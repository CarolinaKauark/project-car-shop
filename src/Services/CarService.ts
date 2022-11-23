import Car from '../Domains/Car';
import ErrorGenerate from '../Helpers/ErrorGenerate';
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

  public async findAll() {
    const CarODM = new CarsODM();
    const newCars = await CarODM.findAll();
    const cars = newCars.map((newCar) => this.createCarDomain(newCar));

    return cars;
  }

  public async findById(id: string) {
    const CarODM = new CarsODM();
    const newCar = await CarODM.findById(id);

    if (!newCar) throw new ErrorGenerate(404, 'Car not found');
    return this.createCarDomain(newCar);
  }
}