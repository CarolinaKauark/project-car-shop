import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { allCars, carInput, carOutput, updatedCarInput, updatedCarOutput } from './carMock';

describe('Testa o CarService', function () {
  it('Cria um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    // Act

    const carService = new CarService();
    const result = await carService.register(carInput);
    // Assert

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Lista todos os carros', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(allCars);
    // Act

    const carService = new CarService();
    const result = await carService.findAll();

    // Assert
    expect(result).to.be.deep.equal(allCars);
  });

  it('Lista carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allCars[0]);
    // Act

    const carService = new CarService();
    const result = await carService.findById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(allCars[0]);
  });

  it('Faz o update do carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCarOutput);
    // Act

    const carService = new CarService();
    const result = await carService.updateById('634852326b35b59438fbea2f', updatedCarInput);

    // Assert
    expect(result).to.be.deep.equal(updatedCarOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});
