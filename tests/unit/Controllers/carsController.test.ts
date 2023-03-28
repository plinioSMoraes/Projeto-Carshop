// import { expect } from 'chai';
// import { NextFunction, Request, Response } from 'express';
// import { Model } from 'mongoose';
// import sinon from 'sinon';
// import CarsController from '../../../src/Controllers/CarsController';
// import ICar from '../../../src/Interfaces/ICar';
// import Connection from '../../../src/Models/Connection';
// 
// describe('Testando a camada Cars Services', function () {
//   it('Testa se é possivel retornar documentos do tipo car com sucesso', async function () {
//     await Connection();
//     const CarOutput: ICar = {
//       id: '6422f533d7117d72e28abb79',
//       model: 'Marea',
//       year: 1992,
//       color: 'Red',
//       status: true,
//       buyValue: 12.001,
//       doorsQty: 2,
//       seatsQty: 8,
//     };
//     const req = { body: { CarOutput } } as Request;
//     const res = { statusCode: 200 } as Response;
//     const mockNext: NextFunction = jest.fn();
//     sinon.stub(Model, 'findOne').resolves(CarOutput);
//     const controller = new CarsController(req, res, mockNext);
//     const result = await controller.findById('6422f533d7117d72e28abb79');
//     expect(result.statusCode).to.be.deep.equal(200);
//     sinon.restore();
//   }); 
// });