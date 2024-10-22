import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoRegularController } from './prestamo_regular.controller';
import { PrestamoRegularService } from './prestamo_regular.service';

describe('PrestamoRegularController', () => {
  let controller: PrestamoRegularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestamoRegularController],
      providers: [PrestamoRegularService],
    }).compile();

    controller = module.get<PrestamoRegularController>(PrestamoRegularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
