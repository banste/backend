import { isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePrestamoRegularDto {

    @IsString()
    @IsNotEmpty()
    hora_inicio : string;

    @IsNumber()
    @IsNotEmpty()
    id_prestamo : number;

    @IsString()
    @IsNotEmpty()
    rut : string;

    @IsNumber()
    @IsNotEmpty()
    id_usuario : number;


}
