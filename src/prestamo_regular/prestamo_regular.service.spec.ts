import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoRegularService } from './prestamo_regular.service';

describe('PrestamoRegularService', () => {
  let service: PrestamoRegularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestamoRegularService],
    }).compile();

    service = module.get<PrestamoRegularService>(PrestamoRegularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
