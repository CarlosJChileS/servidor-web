// src/domain/repositories/parametros-ideales.repository.ts
import { ParametrosIdeales } from '../entities/ParametrosIdeales.entity';

export abstract class ParametrosIdealesRepository {
  abstract create(parametros: ParametrosIdeales): Promise<ParametrosIdeales>;
  abstract findById(id: number): Promise<ParametrosIdeales | null>;
  abstract findAll(): Promise<ParametrosIdeales[]>;
  abstract update(parametros: ParametrosIdeales): Promise<ParametrosIdeales>;
  abstract deleteById(id: number): Promise<void>;
}
