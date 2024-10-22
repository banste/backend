import { IsDate, IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrestamoDto {

    @IsNotEmpty()
    @IsString()
    id_uta : string;


}
