import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private repo: Repository<Feedback>,
  ) {}

  create(dto: Partial<Feedback>) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, dto: Partial<Feedback>) {
    return this.repo.save({ id, ...dto });
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
