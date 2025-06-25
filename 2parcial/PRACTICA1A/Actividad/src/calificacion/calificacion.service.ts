import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { Calificacion } from './entities/calificacion.entity';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private readonly calificacionRepository: Repository<Calificacion>,
  ) {}

  create(dto: CreateCalificacionDto) {
    const calificacion = this.calificacionRepository.create(dto);
    return this.calificacionRepository.save(calificacion);
  }

  findAll() {
    return this.calificacionRepository.find();
  }

  async findOne(id: number) {
    const calificacion = await this.calificacionRepository.findOneBy({ id });
    if (!calificacion) {
      throw new NotFoundException(`Calificacion #${id} not found`);
    }
    return calificacion;
  }

  async update(id: number, dto: UpdateCalificacionDto) {
    const updated = await this.calificacionRepository.preload({
      id,
      ...dto,
    });
    if (!updated) {
      throw new NotFoundException(`Calificacion #${id} not found`);
    }
    return this.calificacionRepository.save(updated);
  }

  async remove(id: number) {
    const result = await this.calificacionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Calificacion #${id} not found`);
    }
    return { deleted: true };
  }
}
