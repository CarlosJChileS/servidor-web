import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export interface DeleteCalificacionUseCase {
  execute(id: number): Promise<Calificacion>;
}

export class DeleteCalificacion implements DeleteCalificacionUseCase {
  constructor(
    private readonly repository: CalificacionRepository,
  ) {}

  execute(id: number): Promise<Calificacion> {
    return this.repository.deleteById(id);
  }
}
