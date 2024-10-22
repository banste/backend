import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { prestamo, Prisma, recurso } from '@prisma/client';
import { ResponseDto } from './dto/response.dto';
import { RecursoEntity } from './entities/recurso.entity';
@Injectable()
export class RecursosService {
  constructor(private readonly databaseService : DatabaseService){}
  
  
  async create(createRecurso: CreateRecursoDto) : Promise<ResponseDto<recurso>>{
    try {
        const newRecurso = await this.databaseService.recurso.create(
          {data : createRecurso});
          
        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.CREATED,
          message: 'Recurso creado con exito',
          data: newRecurso,
        }

        return response


    } catch (error){
      throw new HttpException('Error al crear el recurso',  HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() : Promise<recurso[]>{
    return await this.databaseService.recurso.findMany();
  }

  async findOne(id: string) : Promise<recurso>{
    return await this.databaseService.recurso.findUnique({
      where : {
        id_uta: id
      }
    })
  }

  async update(id: string, updateRecurso: UpdateRecursoDto) : Promise<ResponseDto<recurso>>{
      try {
        const actRecurso = await this.databaseService.recurso.update({
          where : {id_uta : id},
          data : updateRecurso      
        }) 

        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.ACCEPTED,
          message : 'Recurso actualizado',
          data : actRecurso,
        }
        return response;

      } catch (error){
        throw new HttpException('Error al actualizar recurso', HttpStatus.BAD_REQUEST)
      }
  }
    

  async remove(id: string) : Promise<ResponseDto<recurso>>{
   try {

    if(!await this.databaseService.recurso.findUnique({
      where : {
        id_uta : id,
      }
    })){
      throw new HttpException('Recurso a eliminar no existe', HttpStatus.BAD_REQUEST);
    }

    const deleteRecurso = await this.databaseService.recurso.delete({
      where : {id_uta : id},
    });
  

    const response : ResponseDto<recurso> = {
      statusCode : HttpStatus.OK,
      message : 'Recurso borrado con exito',
      data: deleteRecurso
    }
    return response
  } catch(error) {
    throw new HttpException('Error, no se pudo borrar el recurso', HttpStatus.BAD_REQUEST)
  }

  }

  // devuelve todos los prestamos en los que aparece el recurso
  async todosPrestamosRecurso(id_uta : string) : Promise<prestamo[]>{
    try {
      const todosPrestamos = await this.databaseService.prestamo.findMany({
        where:{
          id_uta: id_uta,
        }
      });

      return todosPrestamos;
    }catch(error){
      throw new HttpException('Error al obtener todos los prestamos en los que aparece el recurso', HttpStatus.BAD_REQUEST);
    }
  }

}
