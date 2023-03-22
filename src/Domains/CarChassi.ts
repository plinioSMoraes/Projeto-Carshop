import ICar from '../Interfaces/ICar';

class CarChassi {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default CarChassi;