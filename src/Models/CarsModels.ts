import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
  
class CarsModels {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model('Cars', this.schema);
  }
  
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    const allCars = await this.model.find().select(
      {
        id: '$_id', 
        model: '$model',
        year: '$year',
        color: '$color',
        status: '$status',
        buyValue: '$buyValue',
        doorsQty: '$doorsQty',
        seatsQty: '$seatsQty',
      },
    );
    return allCars;
  }
  public async findById(id: string) {
    const car = await this.model.findById(id).select({
      id: '$_id', 
      model: '$model',
      year: '$year',
      color: '$color',
      status: '$status',
      buyValue: '$buyValue',
      doorsQty: '$doorsQty',
      seatsQty: '$seatsQty',
    });
    return car;
  }
  public async update(car: ICar, id: string): Promise<ICar | null> {
    const updatedCar = await this.model.findByIdAndUpdate({ _id: id }, { ...car }, { new: true })
      .lean();
    return updatedCar;
  }
}
  
export default CarsModels;