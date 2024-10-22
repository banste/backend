import { Module } from '@nestjs/common';
import { PrestamoEspecialService } from './prestamo_especial.service';
import { PrestamoEspecialController } from './prestamo_especial.controller';

@Module({
  controllers: [PrestamoEspecialController],
  providers: [PrestamoEspecialService],
})
export class PrestamoEspecialModule {}
