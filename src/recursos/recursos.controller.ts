import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { Prisma } from '@prisma/client';
import { ResponseDto } from './dto/response.dto';
import { RecursosService } from './recursos.service';

@Controller('recursos')
export class RecursosController {
  constructor(private readonly recursosService: RecursosService) {}

  @Post()
  async create(@Body() createRecurso: CreateRecursoDto) : Promise<ResponseDto<CreateRecursoDto>>{
    const newRecurso = await this.recursosService.create(createRecurso)
    return newRecurso;
  
  }

  @Get()
  findAll() {
    return this.recursosService.findAll();
  }

  @Get('/prestamos/:id')
  async findAllRecursosEnPrestamo(@Param('id') id : string){
    return await this.recursosService.todosPrestamosRecurso(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecurso: UpdateRecursoDto) {
    return this.recursosService.update(id, updateRecurso);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursosService.remove(id);
  }
}
