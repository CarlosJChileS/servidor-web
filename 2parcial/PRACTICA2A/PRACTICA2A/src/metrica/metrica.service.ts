import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetricaInput } from './dto/create-metrica.input';
import { UpdateMetricaInput } from './dto/update-metrica.input';
import { Metrica } from './entities/metrica.entity';

@Injectable()
export class MetricaService {
  constructor(
    @InjectRepository(Metrica)
    private readonly metricaRepository: Repository<Metrica>,
  ) {}

  async create(input: CreateMetricaInput): Promise<Metrica> {
    const entity = this.metricaRepository.create(input);
    return this.metricaRepository.save(entity);
  }

  async findAll(): Promise<Metrica[]> {
    return this.metricaRepository.find();
  }

  async findOne(id: string): Promise<Metrica> {
    const item = await this.metricaRepository.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Metrica #${id} not found`);
    return item;
  }

  async update(id: string, input: UpdateMetricaInput): Promise<Metrica> {
    const entity = await this.metricaRepository.preload({ id, ...input });
    if (!entity) throw new NotFoundException(`Metrica #${id} not found`);
    return this.metricaRepository.save(entity);
  }

  async remove(id: string): Promise<Metrica> {
    const item = await this.findOne(id);
    await this.metricaRepository.remove(item);
    return { ...item, id };
  }
}
