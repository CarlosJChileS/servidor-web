import { CriterioEvaluacion } from '../../entities/evaluacion/criterio-evaluacion.entity';

export abstract class CriterioEvaluacionDatasource {
  abstract create(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion>;
  abstract getAll(): Promise<CriterioEvaluacion[]>;
  abstract findById(id: number): Promise<CriterioEvaluacion>;
  abstract update(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion>;
  abstract deleteById(id: number): Promise<CriterioEvaluacion>;
}
