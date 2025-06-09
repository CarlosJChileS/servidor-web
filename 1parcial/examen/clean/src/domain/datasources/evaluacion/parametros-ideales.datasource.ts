import { ParametrosIdeales } from '../../entities/evaluacion/parametros-ideales.entity';

export abstract class ParametrosIdealesDatasource {
  abstract create(param: ParametrosIdeales): Promise<ParametrosIdeales>;
  abstract getAll(): Promise<ParametrosIdeales[]>;
  abstract findById(id: number): Promise<ParametrosIdeales>;
  abstract update(param: ParametrosIdeales): Promise<ParametrosIdeales>;
  abstract deleteById(id: number): Promise<ParametrosIdeales>;
}
