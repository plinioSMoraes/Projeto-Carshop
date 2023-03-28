import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Connection from '../../../src/Models/Connection';
import MotorcycleModels from '../../../src/Models/MotorcyclesModels';

describe('Testando a camada Model Motorcycles', function () {
  it('Testa se é possivel retornar documentos do tipo motorcycle com sucesso', async function () {
    await Connection();

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
    const model = new MotorcycleModels();
    const result = await model.findById('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(mCycle);
    sinon.restore(); 
  });

  it('Testa se é retornado um array com tipo motorcycle', async function () {
    await Connection();

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
    const model = new MotorcycleModels();
    const result = await model.findAll();
    expect(result).to.be.deep.equal(mCycleArr);
    sinon.restore(); 
  });

  it('Testa se é possivel criar um documento', async function () {
    await Connection();
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
    const model = new MotorcycleModels();
    const result = await model.create(newMCycle);
    expect(result).to.be.deep.equal(newMCycle);
  });

  it('Testa se é possivel deletar um documento', async function () {
    await Connection();
    sinon.stub(Model, 'deleteOne').resolves();
    const model = new MotorcycleModels();
    const result = await model.delete('6422f533d7117d72e28abb79');
    expect(result).to.be.deep.equal(null);
  });
});