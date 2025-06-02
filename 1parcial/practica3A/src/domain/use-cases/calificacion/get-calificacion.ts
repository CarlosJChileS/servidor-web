import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export interface GetCalificacionUseCase {
  execute(id: number): Promise<Calificacion>;
}

export class GetCalificacion implements GetCalificacionUseCase {
  constructor(private readonly repository: CalificacionRepository) {}

  async execute(id: number): Promise<Calificacion> {
    const calificacion = await this.repository.findById(id);
    if (!calificacion) throw new Error('Calificacion not found');
    return calificacion;
  }
}
