import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateRecursoDto {

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fecha_ingreso?: Date;

  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsInt()
  Id_categoria?: number;

  @IsOptional()
  @IsString()
  id_dici?: string;

  @IsString()
  id_uta: string;

  @IsOptional()
  @IsString()
  ubicacion?: string;

  @IsOptional()
  @IsInt()
  id_recurso?: number;
}
