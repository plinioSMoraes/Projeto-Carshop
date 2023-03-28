import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsModel from '../../../src/Models/CarsModels';
import Connection from '../../../src/Models/Connection';

describe('Testando a camada model Cars', function () {
  afterEach(function () {
    sinon.restore(); 
  });

  it('Testa se é possivel retornar documentos do tipo car com sucesso', async function () {
    await Connection();
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
    const model = new CarsModel();
    const result = await model.findById('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(CarOutput);
  });

  it('Testa se é possivel retornar todos documentos do tipo carro', async function () {
    await Connection();
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
    const model = new CarsModel();
    const result = await model.findAll();
    expect(result).to.be.deep.equal(carsArr);
  });

  it('Testa se é possivel criar um documento', async function () {
    await Connection();
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
    const model = new CarsModel();
    const result = await model.create(newCar);
    expect(result).to.be.deep.equal(newCar);
  });

  it('Testa se é possivel deletar um documento', async function () {
    await Connection();
    sinon.stub(Model, 'deleteOne').resolves();
    const model = new CarsModel();
    const result = await model.delete('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(null);
  });
});