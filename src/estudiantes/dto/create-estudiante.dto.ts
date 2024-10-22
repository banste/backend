import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEstudianteDto {
    
    @IsString()
    @IsNotEmpty()
    rut : string
    
    @IsString()
    @IsOptional()
    p_nombre : string
    
    @IsString()
    @IsOptional()
    p_apellido : string
  
    @IsString()
    @IsOptional()
    m_apellido : string

    @IsString()
    @IsOptional()
    s_nombre : string

    @IsString()
    @IsNotEmpty()
    direccion : string;
    
    @IsString()
    @IsOptional()
    fono : string;
    
    @IsNumber()
    @IsOptional()
    ingreso : number;


    @IsString()
    @IsOptional()
    correo : string
    
    @IsString()
    @IsOptional()
    estado_estudiante : string;
}
