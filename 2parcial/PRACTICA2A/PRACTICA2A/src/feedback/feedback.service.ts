import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  async create(input: CreateFeedbackInput): Promise<Feedback> {
    const entity = this.feedbackRepository.create({
      score: input.score,
      comentario: input.comentario,
      esManual: input.esManual,
      grabacion: { id: input.grabacionId } as any,
      metrica: { id: input.metricaId } as any,
    });
    const { id } = await this.feedbackRepository.save(entity);
    return this.findOne(id);
  }

  async findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  async findOne(id: string): Promise<Feedback> {
    const item = await this.feedbackRepository.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Feedback #${id} not found`);
    return item;
  }

  async update(id: string, input: UpdateFeedbackInput): Promise<Feedback> {
    const entity = await this.feedbackRepository.preload({
      id,
      score: input.score,
      comentario: input.comentario,
      esManual: input.esManual,
      grabacion: input.grabacionId
        ? ({ id: input.grabacionId } as any)
        : undefined,
      metrica: input.metricaId ? ({ id: input.metricaId } as any) : undefined,
    });
    if (!entity) throw new NotFoundException(`Feedback #${id} not found`);
    await this.feedbackRepository.save(entity);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Feedback> {
    const item = await this.findOne(id);
    await this.feedbackRepository.remove(item);
    return { ...item, id };
  }
}
