import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { Categoria } from './entities/categoria.entity';
import { categoria, recurso} from '@prisma/client';

@Injectable()
export class CategoriasService {

  constructor(private readonly databaseService : DatabaseService){

  }

  async create(createCategoria: CreateCategoriaDto) : Promise<ResponseDto<categoria>> {
    try {
      
      const newcategoria = await this.databaseService.categoria.create({
        data : {
          fecha_creacion : createCategoria.fecha_creacion,
          nombre_categoria : createCategoria.nombre_categoria
        },
      })

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.CREATED,
        message : 'Categoria creada con exito',
        data: newcategoria
      }
      return response
    }catch(error){
      throw new HttpException('Error al crear la categoria', HttpStatus.BAD_REQUEST)
    } 

  }

  async findAll() : Promise<categoria[]>{
    try {
      return await this.databaseService.categoria.findMany();
    } catch(error){
      throw new HttpException('Error al mostrar las categorias', HttpStatus.BAD_REQUEST);
    }
    
  }

  async findOne(id: number) : Promise<categoria> {
    try{
      return await this.databaseService.categoria.findUnique({
        where : {
          id_categoria: id,
        }
      })
    } catch(error){
      throw new HttpException('Error al mostrar la categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateCategoria : UpdateCategoriaDto) : Promise<ResponseDto<categoria>> {
    
    try {
      const findCategoria = await this.databaseService.categoria.findUnique({
        where : {
          id_categoria : id,
        }
      });

      if(!findCategoria){
        throw new HttpException('Error, no existe esa categoria', HttpStatus.BAD_REQUEST);
      };

      const newCategoria = await this.databaseService.categoria.update({
        where : {id_categoria : id},
        data : updateCategoria,
      });

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.OK,
        message : 'La categoria ha sido modificada con exito',
        data : newCategoria
      }

      return response;
    } catch(error){
      throw new HttpException('Error al actualizar la categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) : Promise<ResponseDto<categoria>>{
    try {
      const removeCategoria = await this.databaseService.categoria.delete({
        where :{
          id_categoria : id,
        }
      });

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.OK,
        message: 'categoria borrada con exito',
        data: removeCategoria,
      };

      return response;
      
    } catch(error){
      throw new HttpException('Error al borrar categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async getAllRecursoByCategoria(id: number): Promise<recurso[]>{
    try {
      const findCategoria = await this.databaseService.categoria.findUnique({
        where : {
          id_categoria: id,
        },
        include: {
          recurso: true,
        }
      });


      const recursos : recurso[] = findCategoria.recurso;
      return  recursos;
    } catch(error){
      throw new HttpException('Error al obtener los recursos según categoria', HttpStatus.BAD_REQUEST);
    }
  }
}
