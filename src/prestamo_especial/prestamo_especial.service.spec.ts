import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoEspecialService } from './prestamo_especial.service';

describe('PrestamoEspecialService', () => {
  let service: PrestamoEspecialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestamoEspecialService],
    }).compile();

    service = module.get<PrestamoEspecialService>(PrestamoEspecialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
