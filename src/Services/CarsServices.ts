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
}

export default CarsServices;