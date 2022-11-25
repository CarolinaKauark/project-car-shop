import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allMotos, motoInput, motoOutput, updatedMoto } from './motoMock';

describe('Testa o CarService', function () {
  it('Cria um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);
    // Act

    const motoService = new MotorcycleService();
    const result = await motoService.register(motoInput);
    // Assert

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Lista todos os carros', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(allMotos);
    // Act

    const motoService = new MotorcycleService();
    const result = await motoService.findAll();

    // Assert
    expect(result).to.be.deep.equal(allMotos);
  });

  it('Lista carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allMotos[0]);
    // Act

    const motoService = new MotorcycleService();
    const result = await motoService.findById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(allMotos[0]);
  });

  it('Faz o update do carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMoto);
    // Act

    const motoService = new MotorcycleService();
    const result = await motoService.updateById('634852326b35b59438fbea2f', allMotos[0]);

    // Assert
    expect(result).to.be.deep.equal(updatedMoto);
  });

  afterEach(function () {
    sinon.restore();
  });
});
