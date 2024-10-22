import { IsBoolean, IsEnum, isNotEmpty, IsNotEmpty, IsString } from "class-validator";
import { TiposUsuario } from "../enums/tiposUsuarios.enum";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombre : string;

    @IsString()
    @IsNotEmpty()
    usuario : string
    
    @IsString()
    @IsNotEmpty()
    apellido : string;

    @IsString()
    @IsNotEmpty()
    correo : string;

    @IsString()
    @IsNotEmpty()
    password : string

    @IsString()
    @IsNotEmpty()
    rut : string;

    @IsEnum(TiposUsuario)
    @IsNotEmpty()
    rol : TiposUsuario;
}
