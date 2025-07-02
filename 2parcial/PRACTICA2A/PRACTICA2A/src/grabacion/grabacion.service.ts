import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrabacionInput } from './dto/create-grabacion.input';
import { UpdateGrabacionInput } from './dto/update-grabacion.input';
import { Grabacion } from './entities/grabacion.entity';

@Injectable()
export class GrabacionService {
  constructor(
    @InjectRepository(Grabacion)
    private readonly grabacionRepository: Repository<Grabacion>,
  ) {}

  async create(input: CreateGrabacionInput): Promise<Grabacion> {
    const entity = this.grabacionRepository.create(input);
    return this.grabacionRepository.save(entity);
  }

  async findAll(): Promise<Grabacion[]> {
    return this.grabacionRepository.find();
  }

  async findOne(id: string): Promise<Grabacion> {
    const item = await this.grabacionRepository.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Grabacion #${id} not found`);
    return item;
  }

  async update(id: string, input: UpdateGrabacionInput): Promise<Grabacion> {
    const entity = await this.grabacionRepository.preload({ id, ...input });
    if (!entity) throw new NotFoundException(`Grabacion #${id} not found`);
    return this.grabacionRepository.save(entity);
  }

  async remove(id: string): Promise<Grabacion> {
    const item = await this.findOne(id);
    await this.grabacionRepository.remove(item);
    return { ...item, id };
  }
}
