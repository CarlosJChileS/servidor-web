// src/domain/repositories/feedback-calificacion.repository.ts
import { FeedbackCalificacion } from '../entities/FeedbackCalificacion.entity';

export abstract class FeedbackCalificacionRepository {
  abstract create(feedback: FeedbackCalificacion): Promise<FeedbackCalificacion>;
  abstract findById(id: number): Promise<FeedbackCalificacion | null>;
  abstract findAll(): Promise<FeedbackCalificacion[]>;
  abstract update(feedback: FeedbackCalificacion): Promise<FeedbackCalificacion>;
  abstract deleteById(id: number): Promise<void>;
}
