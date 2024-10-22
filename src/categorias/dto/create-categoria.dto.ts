import { IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";

export class CreateCategoriaDto {



    @IsString()
    @IsNotEmpty()
    nombre_categoria : string;

    @IsString()
    @IsNotEmpty()
    fecha_creacion : string;
}
