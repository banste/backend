import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamoRegularService } from './prestamo_regular.service';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto';
import { UpdatePrestamoRegularDto } from './dto/update-prestamo_regular.dto';

@Controller('prestamo-regular')
export class PrestamoRegularController {
  constructor(private readonly prestamoRegularService: PrestamoRegularService) {}

  @Post()
  create(@Body() createPrestamoRegularDto: CreatePrestamoRegularDto) {
    return this.prestamoRegularService.create(createPrestamoRegularDto);
  }

  @Get()
  findAll() {
    return this.prestamoRegularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoRegularService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestamoRegularDto: UpdatePrestamoRegularDto) {
    return this.prestamoRegularService.update(+id, updatePrestamoRegularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoRegularService.remove(+id);
  }
}
