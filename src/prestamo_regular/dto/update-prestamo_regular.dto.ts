import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestamoRegularDto } from './create-prestamo_regular.dto';

export class UpdatePrestamoRegularDto extends PartialType(CreatePrestamoRegularDto) {}
