import { Test, TestingModule } from '@nestjs/testing';
import { CobaController } from './coba.controller';

describe('CobaController', () => {
  let controller: CobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobaController],
    }).compile();

    controller = module.get<CobaController>(CobaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
