import Motorcycle from '../Domains/Motorcycle';
import ErrorGenerate from '../Helpers/ErrorGenerate';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotoDomain(newMoto: IMotorcycle | null): Motorcycle | null {
    if (newMoto) {
      return new Motorcycle(newMoto);
    }
    return null;
  }

  public async register(data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMoto = await motorcycleODM.create(data);
    return this.createMotoDomain(newMoto);
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const newMotos = await motorcycleODM.findAll();
    const motos = newMotos.map((newMoto) => this.createMotoDomain(newMoto));

    return motos;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const newMoto = await motorcycleODM.findById(id);

    if (!newMoto) throw new ErrorGenerate(404, 'Motorcycle not found');
    return this.createMotoDomain(newMoto);
  }

  public async updateById(id: string, body: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedMoto = await motorcycleODM.update(id, body);

    if (!updatedMoto) throw new ErrorGenerate(404, 'Motorcycle not found');
    return this.createMotoDomain(updatedMoto);
  }
}