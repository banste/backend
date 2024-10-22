import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto';
import { UpdatePrestamoRegularDto } from './dto/update-prestamo_regular.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { DatabaseService } from 'src/database/database/database.service';
import { regular } from '@prisma/client';
import { ResponseDto } from 'src/recursos/dto/response.dto';

@Injectable()
export class PrestamoRegularService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamoRegular: CreatePrestamoRegularDto) {
      try {

        // como el prestamo generico se encarga de cambiar el estado del recurso, solo se crea el prestamo regular.
        const create_regular = await this.databaseService.regular.create({
          data : createPrestamoRegular
        });
        

        const response : ResponseDto<regular> = {
          statusCode : HttpStatus.OK,
          message : 'Prestamo regular creado con éxito',
          data : create_regular
        };

        return response;

      }catch (error){
        throw new HttpException('Error al crear un prestamo regular', HttpStatus.BAD_REQUEST);
      }
  }

  async findAll() {
    return await this.databaseService.regular.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamoRegular`;
  }

  update(id: number, updatePrestamoRegularDto: UpdatePrestamoRegularDto) {
    return `This action updates a #${id} prestamoRegular`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoRegular`;
  }
}
