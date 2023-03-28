import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarsModels extends AbstractODM<ICar> {  
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Cars');
  }
  
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    const allCars = await this.model.find();
    const modifiedCars = allCars.map((car) => {
      if (!car) {
        return car;
      }
      const res = JSON.parse(JSON.stringify(car));
      res.id = car.id;
      return res;
    });
    return modifiedCars;
  }

  public async findById(id: string) {
    const car = await this.model.findOne({ _id: id });
    if (!car) {
      return car;
    }
    const res = JSON.parse(JSON.stringify(car));
    res.id = id;
    return res;
  }
  
  public async update(_id: string, car: ICar): Promise<ICar | null> {
    const updatedCar = await this.model.findByIdAndUpdate({ _id }, { ...car }, { new: true })
      .lean();
    return updatedCar;
  }

  public async delete(_id: string) {
    const deletedCar = await this.model
      .findByIdAndDelete({ _id });
    return deletedCar;
  }
}
  
export default CarsModels;