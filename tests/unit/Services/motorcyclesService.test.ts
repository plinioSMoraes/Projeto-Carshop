import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesServices from '../../../src/Services/MotorcyclesServices';

describe('Testando a camada Model Motorcycles', function () {
  it('Testa se é possivel retornar documentos do tipo motorcycle com sucesso', async function () {
    const mCycle: Motorcycle = new Motorcycle({
      id: '6422f533d7117d72e28abb79',
      model: 'Honda',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      category: 'Speed',
      engineCapacity: 1100,
    });

    sinon.stub(Model, 'findOne').resolves(mCycle);
    const service = new MotorcyclesServices();
    const result = await service.findById('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(mCycle);
    sinon.restore(); 
  });

  it('Testa se é retornado um array com tipo motorcycle', async function () {
    const mCycle: Motorcycle = new Motorcycle({
      id: '6422f533d7117d72e28abb79',
      model: 'Honda',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      category: 'Speed',
      engineCapacity: 1100,
    });

    const mCycleArr = [mCycle];
    
    sinon.stub(Model, 'find').resolves(mCycleArr);
    const service = new MotorcyclesServices();
    const result = await service.findAll();
    expect(result).to.be.deep.equal(mCycleArr);
    sinon.restore(); 
  });

  it('Testa se é possivel criar um documento', async function () {
    const newMCycle: IMotorcycle = {
      id: '6422f533d7117d72e28abb79',
      model: 'Honda',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.001,
      category: 'Speed',
      engineCapacity: 1100,
    };
    
    sinon.stub(Model, 'create').resolves(newMCycle);
    const service = new MotorcyclesServices();
    const result = await service.create(newMCycle);
    expect(result).to.be.deep.equal(newMCycle);
    sinon.restore();
  });

  it('Testa se é possivel deletar um documento', async function () {
    sinon.stub(Model, 'deleteOne').resolves();
    const service = new MotorcyclesServices();
    const result = await service.delete('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(null);
    sinon.restore();
  });
});