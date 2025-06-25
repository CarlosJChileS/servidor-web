import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';
import { Grabacion } from './entities/grabacion.entity';

@Injectable()
export class GrabacionService {
  constructor(
    @InjectRepository(Grabacion)
    private readonly grabacionRepository: Repository<Grabacion>,
  ) {}

  create(dto: CreateGrabacionDto) {
    const grabacion = this.grabacionRepository.create(dto);
    return this.grabacionRepository.save(grabacion);
  }

  findAll() {
    return this.grabacionRepository.find();
  }

  async findOne(id: number) {
    const grabacion = await this.grabacionRepository.findOneBy({ id });
    if (!grabacion) {
      throw new NotFoundException(`Grabacion #${id} not found`);
    }
    return grabacion;
  }

  async update(id: number, dto: UpdateGrabacionDto) {
    const updated = await this.grabacionRepository.preload({
      id,
      ...dto,
    });
    if (!updated) {
      throw new NotFoundException(`Grabacion #${id} not found`);
    }
    return this.grabacionRepository.save(updated);
  }

  async remove(id: number) {
    const result = await this.grabacionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Grabacion #${id} not found`);
    }
    return { deleted: true };
  }
}
