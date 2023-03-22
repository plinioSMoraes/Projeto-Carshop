import ICar from '../Interfaces/ICar';
// import CarChassi from './CarChassi';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
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