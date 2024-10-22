import { Injectable } from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto';

@Injectable()
export class PrestamoEspecialService {
  create(createPrestamoEspecialDto: CreatePrestamoEspecialDto) {
    return 'This action adds a new prestamoEspecial';
  }

  findAll() {
    return `This action returns all prestamoEspecial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamoEspecial`;
  }

  update(id: number, updatePrestamoEspecialDto: UpdatePrestamoEspecialDto) {
    return `This action updates a #${id} prestamoEspecial`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoEspecial`;
  }
}
