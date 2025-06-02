import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export interface GetCalificacionesUseCase {
  execute(): Promise<Calificacion[]>;
}

export class GetCalificaciones implements GetCalificacionesUseCase {
  constructor(private readonly repository: CalificacionRepository) {}

  execute(): Promise<Calificacion[]> {
    return this.repository.findAll();
  }
}
