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
    const allMotorcycles = await this.model.find();
    const modifiedMCycles = allMotorcycles.map((mCycle) => {
      if (!mCycle) {
        return mCycle;
      }
      const res = JSON.parse(JSON.stringify(mCycle));
      res.id = mCycle.id;
      return res;
    });
    return modifiedMCycles;
  }

  public async findById(id: string) {
    const mCycle = await this.model.findOne({ _id: id });
    if (!mCycle) {
      return mCycle;
    }
    const res = JSON.parse(JSON.stringify(mCycle));
    res.id = id;
    return res;
  }

  public async update(_id: string, mCycle: IMotorcycle): Promise<IMotorcycle | null> {
    const updatedMotorcycle = await this.model
      .findByIdAndUpdate({ _id }, { ...mCycle }, { new: true })
      .lean();
    return updatedMotorcycle;
  }

  public async delete(_id: string) {
    const deletedMotorcycle = await this.model
      .findByIdAndDelete({ _id });
    return deletedMotorcycle;
  }
}
  
export default MotorcyclesModels;