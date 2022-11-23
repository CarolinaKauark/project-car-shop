import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
import ErrorGenerate from '../Helpers/ErrorGenerate';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorGenerate(422, 'Invalid mongo id');
  
    return this.model.findById(
      { _id },
    );
  }
  
  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorGenerate(422, 'Invalid mongo id');
  
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}
  
export default AbstractODM;
