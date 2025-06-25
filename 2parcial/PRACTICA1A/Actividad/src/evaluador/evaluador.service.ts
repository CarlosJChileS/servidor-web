import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEvaluadorDto } from './dto/create-evaluador.dto';
import { UpdateEvaluadorDto } from './dto/update-evaluador.dto';
import { Evaluador } from './entities/evaluador.entity';

@Injectable()
export class EvaluadorService {
  constructor(
    @InjectRepository(Evaluador)
    private readonly evaluadorRepository: Repository<Evaluador>,
  ) {}

  create(dto: CreateEvaluadorDto) {
    const evaluador = this.evaluadorRepository.create(dto);
    return this.evaluadorRepository.save(evaluador);
  }

  findAll() {
    return this.evaluadorRepository.find();
  }

  async findOne(id: number) {
    const evaluador = await this.evaluadorRepository.findOneBy({ id });
    if (!evaluador) {
      throw new NotFoundException(`Evaluador #${id} not found`);
    }
    return evaluador;
  }

  async update(id: number, dto: UpdateEvaluadorDto) {
    const updated = await this.evaluadorRepository.preload({
      id,
      ...dto,
    });
    if (!updated) {
      throw new NotFoundException(`Evaluador #${id} not found`);
    }
    return this.evaluadorRepository.save(updated);
  }

  async remove(id: number) {
    const result = await this.evaluadorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Evaluador #${id} not found`);
    }
    return { deleted: true };
  }
}
