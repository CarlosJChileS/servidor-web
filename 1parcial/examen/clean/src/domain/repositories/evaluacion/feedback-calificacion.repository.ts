import { FeedbackCalificacion } from '../../entities/evaluacion/feedback-calificacion.entity';

export abstract class FeedbackCalificacionRepository {
  abstract create(feedback: FeedbackCalificacion): Promise<FeedbackCalificacion>;
  abstract getAll(): Promise<FeedbackCalificacion[]>;
  abstract findById(id: number): Promise<FeedbackCalificacion>;
  abstract update(feedback: FeedbackCalificacion): Promise<FeedbackCalificacion>;
  abstract deleteById(id: number): Promise<FeedbackCalificacion>;
}
