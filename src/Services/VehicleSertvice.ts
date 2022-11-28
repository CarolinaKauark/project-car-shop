import ErrorGenerate from '../Helpers/ErrorGenerate';
import AbstractODM from '../Models/AbstractODM';

export default class VehicleService<I, D> {
  protected Model: new () => AbstractODM<I>;
  protected erroMessage: string;
  protected Domain: new(newVehicle: I) => D;

  constructor(model: new () => AbstractODM<I>, errorMessage: string, domain: new(model: I) => D) {
    this.Model = model;
    this.erroMessage = errorMessage;
    this.Domain = domain;
  }

  private createDomain(newVehicle: I | null): D | null {
    if (newVehicle) {
      return new this.Domain(newVehicle);
    }
    return null;
  }
    
  public async register(data: I) {
    const ODM = new this.Model();
    const newVehicle = await ODM.create(data);
    return this.createDomain(newVehicle);
  }
    
  public async findAll() {
    const ODM = new this.Model();
    const newVehicles = await ODM.findAll();
    const vehicles = newVehicles.map((newVehicle) => this.createDomain(newVehicle));
    
    return vehicles;
  }
    
  public async findById(id: string) {
    const ODM = new this.Model();
    const newVehicle = await ODM.findById(id);
    
    if (!newVehicle) throw new ErrorGenerate(404, this.erroMessage);
    return this.createDomain(newVehicle);
  }
    
  public async updateById(id: string, body: I) {
    const ODM = new this.Model();
    const updatedVehicle = await ODM.update(id, body);
    
    if (!updatedVehicle) throw new ErrorGenerate(404, this.erroMessage);
    return this.createDomain(updatedVehicle);
  }
}