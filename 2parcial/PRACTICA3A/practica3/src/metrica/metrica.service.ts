import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metrica } from './entities/metrica.entity';

@Injectable()
export class MetricaService {
  constructor(
    @InjectRepository(Metrica)
    private repo: Repository<Metrica>,
  ) {}

  create(dto: Partial<Metrica>) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, dto: Partial<Metrica>) {
    return this.repo.save({ id, ...dto });
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
