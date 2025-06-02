// src/domain/repositories/criterio-evaluacion.repository.ts
import { CriterioEvaluacion } from '../entities/CriterioEvaluacion.entity';

export abstract class CriterioEvaluacionRepository {
  abstract create(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion>;
  abstract findById(id: number): Promise<CriterioEvaluacion | null>;
  abstract findAll(): Promise<CriterioEvaluacion[]>;
  abstract update(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion>;
  abstract deleteById(id: number): Promise<void>;
}
