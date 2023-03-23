import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModels from '../Models/CarsModels';

class CarsServices {
  public createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const model = new CarsModels();
    const newCar = await model.create(car);
    return this.createCar(newCar);
  }

  public async findAll() {
    const model = new CarsModels();
    const allCars = await model.findAll();
    return allCars;
  }

  public async findById(id: string) {
    const model = new CarsModels();
    const car = await model.findById(id);
    return car;
  }

  public async update(id: string, car: ICar) {
    const model = new CarsModels();
    const updatedCar = await model.update(car, id);
    return updatedCar;
  }
}

export default CarsServices;