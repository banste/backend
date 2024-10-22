import { Module } from '@nestjs/common';
import { PrestamoRegularService } from './prestamo_regular.service';
import { PrestamoRegularController } from './prestamo_regular.controller';

@Module({
  controllers: [PrestamoRegularController],
  providers: [PrestamoRegularService],
})
export class PrestamoRegularModule {}
