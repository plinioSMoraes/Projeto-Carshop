import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesServices from '../Services/MotorcyclesServices';

class MotorcyclesControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesServices();
  }

  public async createMotorcycle() {
    const mCycle: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(mCycle);
      if (!newMotorcycle) return this.res.status(404).json({ message: 'Invalid Arguments' });
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allMotorCycles = await this.service.findAll();
    return this.res.status(200).json(allMotorCycles);
  }

  public async findById(id: string) {
    const mCycle = await this.service.findById(id);
    return this.res.status(200).json(mCycle);
  }
}

export default MotorcyclesControllers;