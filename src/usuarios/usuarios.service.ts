import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { ayudante, usuario } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { promises } from 'dns';
import { TiposUsuario } from './enums/tiposUsuarios.enum';
import { error } from 'console';

@Injectable()
export class UsuariosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createUsuario: CreateUsuarioDto) : Promise<ResponseDto<usuario>>{
    try {
      const usuario = await this.databaseService.usuario.create(
        {
          data: {
            nombre: createUsuario.nombre,
            usuario: createUsuario.usuario,
            apellido: createUsuario.apellido,
            correo: createUsuario.correo,
            password: createUsuario.password,
            rut: createUsuario.rut,
          },
        }
      );

      if(createUsuario.rol == TiposUsuario.administrador){
        await this.databaseService.admin.create({
          data: {
            id_usuario : usuario.id_usuario,
          }
        })
      }else if(createUsuario.rol == TiposUsuario.ayudante){
        await this.databaseService.ayudante.create({
          data: {
            id_usuario: usuario.id_usuario,
          }
        })
      } else{
        throw new HttpException('Rol no válido', HttpStatus.BAD_REQUEST);
      }


      const response : ResponseDto<usuario> = {
        statusCode : HttpStatus.CREATED,
        message: 'Usuario creado con exito',
        data : usuario,
      };


      return response;

    } catch(error){
      throw new HttpException('Error al crear usuario', HttpStatus.BAD_REQUEST);
    }
  }


  findAll() {
    try {
      return this.databaseService.usuario.findMany();
    }catch(error){
      throw new HttpException('Error al cargar todos los usuarios', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id_user: number) {
    try{
        return await this.databaseService.usuario.findUnique({
          where : {
            id_usuario : id_user,
          }
        })
      }
      catch(error){
        throw new HttpException('Error al obtener el usuario', HttpStatus.BAD_REQUEST)
      }
    }
  

  async update(id_user: number, updateUsuario: UpdateUsuarioDto) : Promise<ResponseDto<usuario>> {
    try {
      const actUsuario = await this.databaseService.usuario.update(
        {
          where: {id_usuario : id_user},
          data: updateUsuario
        }
      )

      const response : ResponseDto<usuario> = {
        statusCode : HttpStatus.OK,
        message : 'Usuario actualizado',
        data : actUsuario,
      }

      return response
    }catch(error){
      throw new HttpException('Error al actualizar el usuario', HttpStatus.BAD_REQUEST)
    }
  }

  async remove(id_usuario: number) {
    try {
      
      const findUser = await this.databaseService.usuario.findUnique({
        where: {
          id_usuario : id_usuario,
        }
      })

      // Borrar usuario si es ayudante o administrador
      if (await this.databaseService.admin.findUnique({
        where: {
          id_usuario : findUser.id_usuario,
        }
      })){
        this.databaseService.admin.delete({
          where : {
            id_usuario : findUser.id_usuario,
          }
        })
      }else if(await this.databaseService.ayudante.findUnique({
        where : {
          id_usuario : findUser.id_usuario,
        }
      })){
        this.databaseService.ayudante.delete({
          where : {
            id_usuario : findUser.id_usuario,
          }
        })
      }else{
        throw new HttpException('Error, usuario no existe', HttpStatus.BAD_REQUEST);
      };

      // remover usuario
      const removeUser = this.databaseService.usuario.delete({
        where : {id_usuario : id_usuario}
      })

      
      const response = {
        statusCode : HttpStatus.OK,
        message : 'Usuario eliminado con exito',
        data : removeUser
      }

      return response;
    } catch(error){
      throw new HttpException('Error al borrar el usuario', HttpStatus.BAD_REQUEST);
    }
  }

  async verAyudantes() {
    const manyAyudantes : ayudante[] =  await this.databaseService.ayudante.findMany({
      include: {
        Usuario: true,
      }
    });

    return manyAyudantes;
  }
}
