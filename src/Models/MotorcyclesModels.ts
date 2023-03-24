import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcyclesModels extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycles');
  }

  public async create(mCycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...mCycle });
  }

  public async findAll() {
    const allMotorCycles = await this.model.find();
    return allMotorCycles;
  }

  public async findById(id: string) {
    const mCycle = await this.model.findById({ _id: id });
    return mCycle;
  }
}
  
export default MotorcyclesModels;