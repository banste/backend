import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoEspecialController } from './prestamo_especial.controller';
import { PrestamoEspecialService } from './prestamo_especial.service';

describe('PrestamoEspecialController', () => {
  let controller: PrestamoEspecialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestamoEspecialController],
      providers: [PrestamoEspecialService],
    }).compile();

    controller = module.get<PrestamoEspecialController>(PrestamoEspecialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
