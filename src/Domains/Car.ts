import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }

  public getCarDetails() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      color: this.color,
      status: this.status,
      buyValue: this.buyValue,
    };
  }

  public setStatus() {
    this.status = !this.status;
  }
}
  
export default Car;