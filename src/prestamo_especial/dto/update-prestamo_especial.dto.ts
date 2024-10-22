import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestamoEspecialDto } from './create-prestamo_especial.dto';

export class UpdatePrestamoEspecialDto extends PartialType(CreatePrestamoEspecialDto) {}
