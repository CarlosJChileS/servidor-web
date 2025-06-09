import { CriterioEvaluacion } from '../../entities/evaluacion/criterio-evaluacion.entity';
import { CriterioEvaluacionRepository } from '../../repositories/evaluacion/criterio-evaluacion.repository';

export interface GetCriteriosUseCase {
  execute(): Promise<CriterioEvaluacion[]>;
}

export class GetCriterios implements GetCriteriosUseCase {
  constructor(private readonly repository: CriterioEvaluacionRepository) {}
  execute(): Promise<CriterioEvaluacion[]> {
    return this.repository.getAll();
  }
}
