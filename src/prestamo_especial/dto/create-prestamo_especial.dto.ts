import { IsNotEmpty, IsString } from "class-validator";

export class CreatePrestamoEspecialDto {
    
    @IsNotEmpty()
    @IsString()
    descripcion : string;

    @IsNotEmpty()
    @IsString()
    motivo : string
}
