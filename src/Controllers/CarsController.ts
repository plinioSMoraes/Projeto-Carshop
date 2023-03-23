import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsServices from '../Services/CarsServices';

class CarsControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsServices();
  }

  public async createCar() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      if (!newCar) return this.res.status(404).json({ message: 'Invalid Arguments' });
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allCars = await this.service.findAll();
    return this.res.status(200).json(allCars);
  }

  public async findById(id: string) {
    const car = await this.service.findById(id);
    if (!car) return this.res.status(404).json({ message: 'Car not found' });
    return this.res.status(200).json(car);
  }

  public async update(id: string, car: ICar) {
    const updatedCar = await this.service.update(id, car);
    if (!updatedCar) return this.res.status(404).json({ message: 'Car not found' });
    if (!updatedCar.status) updatedCar.status = false;
    return this.res.status(200).json({ id, ...updatedCar });
  }
}

export default CarsControllers;