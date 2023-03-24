import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesModels from '../Models/MotorcyclesModels';

class MotorcyclesServices {
  public createMotorcycle(mCycle: IMotorcycle | null): Motorcycle | null {
    if (mCycle) {
      return new Motorcycle(mCycle);
    }
    return null;
  }
    
  public async create(mCycle: IMotorcycle) {
    const model = new MotorcyclesModels();
    const newMotorcycle = await model.create(mCycle);
    return this.createMotorcycle(newMotorcycle);
  }

  public async findAll() {
    const model = new MotorcyclesModels();
    const allMotorCycles = await model.findAll();
    return allMotorCycles;
  }
  
  public async findById(id: string) {
    const model = new MotorcyclesModels();
    const mCycle = await model.findById(id);
    return mCycle;
  }

  public async update(id: string, mCycle: IMotorcycle) {
    const model = new MotorcyclesModels();
    const updatedCar = await model.update(id, mCycle);
    return updatedCar;
  }

  public async delete(id: string) {
    const model = new MotorcyclesModels();
    const deletedMotorcycle = await model.delete(id);
    return deletedMotorcycle;
  }
}

export default MotorcyclesServices;