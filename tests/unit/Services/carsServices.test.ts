import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsServices from '../../../src/Services/CarsServices';

describe('Testando a camada Cars Services', function () {
  afterEach(function () {
    sinon.restore(); 
  });

  it('Testa se é possivel retornar documentos do tipo car com sucesso', async function () {
    const CarOutput: Car = new Car({
      id: '6422f533d7117d72e28abb79',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      doorsQty: 2,
      seatsQty: 8,
    });

    sinon.stub(Model, 'findOne').resolves(CarOutput);
    const service = new CarsServices();
    const result = await service.findById('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(CarOutput);
  });

  it('Testa se é possivel retornar todos documentos do tipo carro', async function () {
    const CarOne: Car = new Car({
      id: '6422f533d7117d72e28abb79',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      doorsQty: 2,
      seatsQty: 8,
    });

    const carsArr = [CarOne];
    
    sinon.stub(Model, 'find').resolves(carsArr);
    const service = new CarsServices();
    const result = await service.findAll();
    expect(result).to.be.deep.equal(carsArr);
  });

  it('Testa se é possivel criar um documento', async function () {
    const newCar: ICar = {
      id: '6422f533d7117d72e28abb79',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      doorsQty: 2,
      seatsQty: 8,
    };
    
    sinon.stub(Model, 'create').resolves(newCar);
    const service = new CarsServices();
    const result = await service.create(newCar);
    expect(result).to.be.deep.equal(newCar);
  });

  it('Testa se é possivel deletar um documento', async function () {
    sinon.stub(Model, 'deleteOne').resolves();
    const service = new CarsServices();
    const result = await service.delete('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(null);
  });
});