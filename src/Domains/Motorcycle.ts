import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(mCycle: IMotorcycle) {
    super(mCycle);
    this.category = mCycle.category;
    this.engineCapacity = mCycle.engineCapacity;
  }
}
  
export default Motorcycle;