import { CriterioEvaluacion, CriterioEvaluacionDatasource, CriterioEvaluacionRepository } from '../../domain';

export class CriterioEvaluacionRepositoryImpl implements CriterioEvaluacionRepository {
  constructor(private readonly datasource: CriterioEvaluacionDatasource) {}

  create(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion> {
    return this.datasource.create(criterio);
  }

  getAll(): Promise<CriterioEvaluacion[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CriterioEvaluacion> {
    return this.datasource.findById(id);
  }

  update(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion> {
    return this.datasource.update(criterio);
  }

  deleteById(id: number): Promise<CriterioEvaluacion> {
    return this.datasource.deleteById(id);
  }
}
