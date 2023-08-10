import { Test, TestingModule } from '@nestjs/testing';
import { CobaService } from './coba.service';

describe('CobaService', () => {
  let service: CobaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CobaService],
    }).compile();

    service = module.get<CobaService>(CobaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
